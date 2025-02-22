import Image from "next/image";
import Link from "next/link";

export default function Header() {


  return (
    <header>
      <nav className="bg-gray-200 dark:bg-gray-800 antialiased">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            {/** Logo & Navigation */}
            <div className="flex items-center space-x-8">
              <Link href="/" title="" className="flex items-center ">
                <Image
                  className="block w-auto h-8 dark:hidden"
                  src="/fakestorelogo.png"
                  alt="Fake store logo"
                  width={35}
                  height={35}
                />
                <h2 className="text-2xl font-bold ms-4">Fake Store</h2>
              </Link>
              <ul className="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link
                    href="/"
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            {/** Cart Display */}
            <div className="flex items-center lg:space-x-2">
              <Link
                href="/cart"
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  ></path>
                </svg>
                <span className="hidden sm:flex">My Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
