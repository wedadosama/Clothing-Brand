export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white font-bold text-3xl py-6 mt-10">
      <div className="max-w-full px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
        <ul className="flex space-x-6 text-sm">
          <li>
            <a href="/privacy" className="hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
