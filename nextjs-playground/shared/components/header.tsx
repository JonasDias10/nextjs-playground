export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Next.js Playground</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#hero" className="text-gray-600 hover:text-gray-800">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600 hover:text-gray-800">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600 hover:text-gray-800">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-800"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#faq" className="text-gray-600 hover:text-gray-800">
                FAQ
              </a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-gray-800">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
