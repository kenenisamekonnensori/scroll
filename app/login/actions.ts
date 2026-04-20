"use server";

import { redirect } from "next/navigation";
import {
  clearAdminSession,
  createAdminSession,
  validateAdminCredentials,
} from "@/lib/auth";

export type LoginFormState = {
  error?: string;
};

export async function loginAdmin(
  _prevState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: "Enter the admin email and password." };
  }

  if (!validateAdminCredentials(email, password)) {
    return { error: "Only the authorized admin account can access the dashboard." };
  }

  await createAdminSession();
  redirect("/dashboard");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/login");
}
