import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 text-sm text-slate-600 md:grid-cols-4">
        <div>
          <h4 className="mb-4 text-base font-bold text-slate-900">ScrollGuard</h4>
          <p>© 2026 ScrollGuard. Built for digital health and deep focus.</p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
            Product
          </h4>
          <ul className="flex flex-col space-y-3">
            <li>
              <Link
                href="/#features"
                className="transition-colors hover:text-slate-900"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/download"
                className="transition-colors hover:text-slate-900"
              >
                Download
              </Link>
            </li>
            <li>
              <Link href="/docs" className="transition-colors hover:text-slate-900">
                Docs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
            Focus system
          </h4>
          <ul className="flex flex-col space-y-3">
            <li>Track usage patterns</li>
            <li>Set custom app limits</li>
            <li>Auto-block when limit ends</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-slate-900">
            Platform
          </h4>
          <ul className="flex flex-col space-y-3">
            <li>Android APK</li>
            <li>Simple setup flow</li>
            <li>Private-by-design approach</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
