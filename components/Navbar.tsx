"use client";

import * as React from "react";
import { Icons } from "@/public/assets/icon";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { FiChevronDown } from "react-icons/fi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className=" wrapper ">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Icons.Logo />
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-start">
            <div className="max-w-lg w-full lg:max-w-xs">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icons.Search />
                </div>

                <Input
                  id="search"
                  className="block ring-ring-offset-0 focus- outline-0 w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-0 focus:placeholder-gray-400 focus:ring-0  sm:text-sm md:w-[36vw] "
                  placeholder="Search products, categories and brands"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="hidden flex- max-w-[350px] bg-red700 sm:ml-6 sm:flex sm:items-center justify-between gap-3 ">
            <div className="flex items-center gap-4 justifybetween ">
              <div className="cursor-pointer">
                <Icons.Bell className="w-6 h-6 text-gray-700" />
              </div>

              <div className="cursor-pointer">
                <Icons.CartIcon className="w-6 h-6 text-gray-700" />
              </div>

              <div className="w-full flex items-center cursor-pointer bg-blue400 justify-between ">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-0 bg-gray-100 p-2 rounded-full">
                    <Icons.ProfileIcon className="w-7 h-7 text-gray-700" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      <div className="font-medium">Fred Onana</div>
                      <div className="text-sm text-muted-foreground">
                        fredonana@gmail.com
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <DropdownMenu onOpenChange={(open) => setIsMenuOpen(open)}>
              <DropdownMenuTrigger className="outline-0 bg-gray-100 p-2 rounded-md">
                {isMenuOpen ? (
                  <Icons.XIcon className="h-6 w-6" />
                ) : (
                  <Icons.Hamburger className="h-6 w-6" />
                )}
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>
                  <div className="font-medium">Fred Onana</div>
                  <div className="text-sm text-muted-foreground">
                    fredonana@gmail.com
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Notifications
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Cart
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
