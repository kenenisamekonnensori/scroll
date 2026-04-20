import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

const AUTH_COOKIE = "scrollguard_admin_session";

function getAdminConfig() {
  const email = process.env.SCROLLGUARD_ADMIN_EMAIL ?? "admin@scrollguard.com";
  const password = process.env.SCROLLGUARD_ADMIN_PASSWORD ?? "admin123";
  const secret =
    process.env.SCROLLGUARD_AUTH_SECRET ?? "scrollguard-local-admin-secret";

  return { email, password, secret };
}

function createSessionToken(email: string, secret: string) {
  return createHmac("sha256", secret).update(email).digest("hex");
}

export function validateAdminCredentials(email: string, password: string) {
  const config = getAdminConfig();
  return email === config.email && password === config.password;
}

export async function createAdminSession() {
  const store = await cookies();
  const { email, secret } = getAdminConfig();

  store.set(AUTH_COOKIE, createSessionToken(email, secret), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24,
  });
}

export async function clearAdminSession() {
  const store = await cookies();
  store.delete(AUTH_COOKIE);
}

export async function isAdminAuthenticated() {
  const store = await cookies();
  const session = store.get(AUTH_COOKIE)?.value;

  if (!session) {
    return false;
  }

  const { email, secret } = getAdminConfig();
  const expected = createSessionToken(email, secret);
  const sessionBuffer = Buffer.from(session);
  const expectedBuffer = Buffer.from(expected);

  if (sessionBuffer.length !== expectedBuffer.length) {
    return false;
  }

  return timingSafeEqual(sessionBuffer, expectedBuffer);
}
