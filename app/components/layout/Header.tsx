import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-[var(--color-light-bg)]">
      <Navbar />
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pb-4">
        <h1 className="text-4xl font-semibold text-foreground">
          Starting SEO as your Home
        </h1>
      </div>
    </header>
  );
}
