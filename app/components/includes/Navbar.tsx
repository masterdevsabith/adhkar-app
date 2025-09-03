import { HelpCircle, Settings } from "lucide-react";
import { ThemeSwitcher } from "../ui/theme-switcher";

export default function Navbar() {
  return (
    <header className="py-4 px-12 flex items-center justify-between border-b border-neutral-600 bg-red-600">
      <div className="left"></div>
      <div className="right flex items-center gap-3">
        <ThemeSwitcher />
        <HelpCircle />
        <Settings />
      </div>
    </header>
  );
}
