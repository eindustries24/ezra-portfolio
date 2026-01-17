import Link from "next/link";

export default function Nav() {
  return (
    <div className="navbar bg-base-100 shadow-sm rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            style={{ zIndex: "1000" }}
          >
            <li>
              <Link href="/about" className="text-lg">
                About
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-lg">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <Link
          href="/"
          className="btn btn-ghost hover:bg-base-200 hover:shadow-none rounded-full border-none text-xl"
        >
          Ezra LC
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-base">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/#contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          href="/#contact"
          className="btn btn-neutral rounded-full shadow-none"
        >
          Let&apos;s talk
        </Link>
      </div>
    </div>
  );
}
