import { HelpCircle, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="py-4 px-12 flex items-center justify-between border-b border-neutral-600">
      <div className="left"></div>
      <div className="right flex items-center gap-3">
        <HelpCircle />
        <Settings />
      </div>
    </header>
  );
}
