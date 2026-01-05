const Navigation = () => {
  const navItems = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/" },
    { name: "Experience", href: "/" },
    { name: "Contacts", href: "/" },
  ];

  return (
    <main>
      <div className="relative">
        <div className="absolute w-full">
          <section className="sticky z-50 rounded-full">
            <div className="flex items-center justify-between h-16 max-w-6xl p-1 px-6 mx-auto overflow-hidden border rounded-full backdrop-blur-xs bg-black/30 sm:px-8 border-white/25 ">
              <div className="flex items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0bb37a] text-lg font-black tracking-tight text-black shadow-[0_0_30px_rgba(11,179,122,0.35)]">
                  ES
                </div>
              </div>
              <nav className="flex items-center gap-8 text-sm font-medium text-gray-200">
                {navItems.map((navItem) => (
                  <a
                    key={navItem.name}
                    href={navItem.href}
                    className="transition-colors hover:text-[#0bb37a]"
                  >
                    {navItem.name}
                  </a>
                ))}
              </nav>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};
export default Navigation;
