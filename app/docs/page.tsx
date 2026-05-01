import { Navbar } from "@/components/Navbar";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsHeader } from "@/components/docs/DocsHeader";
import { DocsContent } from "@/components/docs/DocsContent";
import { DocsFooter } from "@/components/docs/DocsFooter";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-[#f7fbfd]">
      <Navbar active="docs" />
      <div className="mx-auto flex w-full max-w-[1440px]">
        <DocsSidebar />
        <main className="min-w-0 flex-1 px-5 py-8 sm:px-6 lg:px-10 xl:px-12">
          <DocsHeader />
          <DocsContent />
          <DocsFooter />
        </main>
      </div>
    </div>
  );
}
