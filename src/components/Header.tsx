"use client";
import Link from "next/link";

function Header() {
  const tabs = [
    {
      id: 1,
      name: "Jobs",
      href: "/jobs",
    },
    {
      id: 2,
      name: "Events",
      href: "/events",
    },
    {
      id: 3,
      name: "Learning",
      href: "/learning",
    },
    {
      id: 4,
      name: "ContactUs",
      href: "/contactus",
    },
  ];

  return (
    <nav className="w-full border-b border-gray-300 flex justify-between ">
      {/* logo */}
      <div id="logo" className="py-4 px-8">
        <h1 className="text-3xl font-bold font-mono">
          <Link href={"/"}> VasaiIT</Link>
        </h1>
      </div>

      {/* tabs */}
      <div id="tabs" className="ml-4 flex items-center space-x-6 gap-6">
        {
            tabs.map((tab)=>(
            <Link
              key={tab.id}
              href={tab.href}
              className="text-lg font-medium text-gray-700 hover:text-gray-900"
            >
              {tab.name}
            </Link>
            ))
        }
      </div>
    </nav>
  );
}

export default Header;
