import Image from "next/image";
import Link from "next/link";

import ContactMenu from "@/components/ContactMenu";

function Header() {
  return (
    <div className="sticky top-0 z-10 flex h-20 items-center gap-2 bg-white px-4 lg:px-8">
      <Link className="mr-auto flex items-center" href="/">
        <Image src="/XD_logo.png" alt="Xue DAO logo" width={150} height={150} />
        <span className="sr-only">XueDAO</span>
      </Link>
      <nav className="ml-auto flex flex-row gap-4 text-base font-medium sm:flex-row sm:gap-6 sm:text-xl">
        <Link
          className="underline-offset-4 hover:underline"
          href="https://lu.ma/calendar/cal-Pj8ibnEe0RyZsPH"
          target="_blank"
        >
          Events
        </Link>
        <Link className="underline-offset-4 hover:underline" href="#">
          Resources
        </Link>
        <Link
          className="underline-offset-4 hover:underline"
          href="https://medium.com/xuedao"
          target="_blank"
        >
          Blog
        </Link>
        <ContactMenu />
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-amber-500 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-amber-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
          href="https://forms.gle/WAm4n1KiKeYksWj19"
          target="_blank"
        >
          Join Us
        </Link>
      </nav>
    </div>
  );
}

export default Header;
