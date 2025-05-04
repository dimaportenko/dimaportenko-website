import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="min-h-10 flex items-center justify-end px-5">
      <div className="self-end">
        <ModeToggle />
      </div>
    </header>
  );
}
