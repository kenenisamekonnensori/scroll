import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-sm text-gray-500">
        <div>
          <h4 className="font-bold text-gray-900 mb-4 text-base">ScrollGuard</h4>
          <p>© 2026 SCROLLGUARD INC. DESIGNED FOR DIGITAL HEALTH.</p>
        </div>
        
        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Product</h4>
          <ul className="space-y-3 flex flex-col">
            <li><Link href="#features" className="hover:text-black">FEATURES</Link></li>
            <li><Link href="/docs" className="hover:text-black">DOCS</Link></li>
            <li><Link href="/dashboard" className="hover:text-black">DASHBOARD</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Support</h4>
          <ul className="space-y-3 flex flex-col">
            <li><Link href="/help" className="hover:text-black">HELP CENTER</Link></li>
            <li><Link href="/security" className="hover:text-black">SECURITY</Link></li>
            <li><Link href="/status" className="hover:text-black">STATUS</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Legal</h4>
          <ul className="space-y-3 flex flex-col">
            <li><Link href="/privacy" className="hover:text-black">PRIVACY POLICY</Link></li>
            <li><Link href="/terms" className="hover:text-black">TERMS OF SERVICE</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}