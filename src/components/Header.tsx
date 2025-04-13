export default function Header() {
  const navLinks: string[] = ["Home", "About", "Contact"];
  const navLinkRendered = navLinks.map((navLink, index) => (
    <li key={index}>
      <a href={`#${navLink.toLowerCase()}`} className="text-gray-700 hover:text-blue-600 transition-colors duration-300">
        {navLink}
      </a>
    </li>
  ));

  return (
    <header className="bg-blue-200 shadow-md p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">MyShop</h1>
        <ul className="flex space-x-6 text-2xl text-gray-500 font-bold">{navLinkRendered}</ul>
      </nav>
    </header>
  );
}
