<!-- BEGIN:nextjs-agent-rules -->
# AGENTS.md

## Project Overview
This is a Next.js (App Router) website for ScrollGuard.
Purpose:
- Landing page for the app
- Download page (APK)
- Documentation for users

Focus:
- Clean UI
- Fast performance
- SEO optimization

---

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Shadcn UI

---

## Folder Structure Rules
- Use /app for routing (App Router only)
- Place reusable UI in /components
- Keep pages minimal and move logic into components

Example:
app/
  page.tsx
  download/page.tsx
  docs/page.tsx

components/
  Navbar.tsx
  Footer.tsx

---

## Coding Guidelines
- Use functional components only
- Use TypeScript types for props
- Prefer server components unless interactivity is needed
- Use "use client" only when necessary

---

## Styling Rules
- Use Tailwind CSS only
- Avoid inline styles
- Keep UI clean and minimal

---

## Performance Rules
- Avoid unnecessary client-side state
- Prefer static content when possible
- Optimize images using Next.js Image component

---

## DO NOT
- Do not use outdated patterns (e.g. pages router)
- Do not install unnecessary libraries
- Do not use Redux (overkill for this project)

---

## UI/UX Guidelines
- Clean SaaS-style design
- Clear call-to-action (Download button)
- Mobile-first design

---

## Documentation Pages
- Keep content simple and readable
- Use clear headings
- Avoid overly complex layouts

---

## Goal
Produce clean, maintainable, production-ready code.
Avoid over-engineering.

<!-- END:nextjs-agent-rules -->
