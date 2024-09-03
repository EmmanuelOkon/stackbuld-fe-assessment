"use client";

import * as React from "react";
import { Icons } from "@/public/assets/icon";
import Link from "next/link";
import { Input } from "@/components/ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MdAddToPhotos } from "react-icons/md";
import { Button } from "./ui/button";
import { CalendarCheckIcon, CalendarIcon, MailOpenIcon, MinusIcon, PlusIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import Image from "next/image";

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
            <div className="flex items-center gap-4  ">
              <div className="cursor-pointer">
                <MdAddToPhotos className="w-6 h-6 text-gray-700" />
              </div>

              <div className="cursor-pointer flex items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative bg-none rounded-full "
                    >
                      <Icons.Bell className="h-6 w-6" />
                      <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-primary-foreground">
                        3
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-80 p-4">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium">Notifications</h4>
                        <p className="text-muted-foreground">3 unread</p>
                      </div>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <CalendarCheckIcon className="h-4 w-4" />
                          </div>
                          <div className="grid gap-1">
                            <p className="font-medium">
                              Your order has been placed
                            </p>
                            <p className="text-sm text-muted-foreground">
                              5 minutes ago
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <MailOpenIcon className="h-4 w-4" />
                          </div>
                          <div className="grid gap-1">
                            <p className="font-medium">
                              You have a new message
                            </p>
                            <p className="text-sm text-muted-foreground">
                              1 minute ago
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                            <CalendarIcon className="h-4 w-4" />
                          </div>
                          <div className="grid gap-1">
                            <p className="font-medium">
                              Your subscription is expiring soon
                            </p>
                            <p className="text-sm text-muted-foreground">
                              2 hours ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="cursor-pointer flex items-center">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative bg-none rounded-full "
                    >
                      <Icons.CartIcon className="h-6 w-6" />
                      <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-purple-600 text-xs text-primary-foreground">
                        2
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-80 p-4">
                    <div className="grid gap-4">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-medium">Cart</h4>
                        <p className="text-muted-foreground">2 items</p>
                      </div>
                      <div className="grid gap-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/assets/images/deals2.jpg"
                              alt="Product Image"
                              width={48}
                              height={48}
                              className="rounded-md"
                              style={{
                                aspectRatio: "48/48",
                                objectFit: "cover",
                              }}
                            />
                            <div className="grid gap-1">
                              <p className="font-medium">Apple Vision Pro 2</p>
                              <p className="text-sm text-muted-foreground">
                                ₦250,000
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <MinusIcon className="h-4 w-4" />
                            </Button>
                            <span>1</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Image
                              src="/assets/images/men3.jpg"
                              alt="Product Image"
                              width={48}
                              height={48}
                              className="rounded-md"
                              style={{
                                aspectRatio: "48/48",
                                objectFit: "cover",
                              }}
                            />
                            <div className="grid gap-1">
                              <p className="font-medium">Men&apos;s Suit</p>
                              <p className="text-sm text-muted-foreground">
                                ₦40,000
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <MinusIcon className="h-4 w-4" />
                            </Button>
                            <span>1</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="rounded-full"
                            >
                              <PlusIcon className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between">
                        <p className="text-muted-foreground">Total</p>
                        <p className="font-medium">₦290,000</p>
                      </div>
                      <Button>Checkout</Button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>

              <div className="w-full flex items-center cursor-pointer  justify-between ">
                <Popover>
                  <PopoverTrigger asChild className="outline-0   ">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="bg-gray-100  hover:bg-gray-300 p-2 rounded-full "
                    >
                      <Icons.ProfileIcon className="w-7 h-7 text-gray-700" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="w-80 p-4">
                    <div className="grid gap-4">
                      <div className="text-[#333333] ">
                        <h2 className="font-medium">Fred Onana</h2>
                        <p className="text-sm text-muted-foreground">
                          fredonana@gmail.com
                        </p>
                      </div>

                      <Separator />
                      <div className="flex flex-col gap-2">
                        <Link
                          href="#"
                          className="font-medium hover:bg-gray-200 p-2 rounded-md"
                        >
                          Profile
                        </Link>
                        <Link
                          href="#"
                          className="font-medium hover:bg-gray-200 p-2 rounded-md"
                        >
                          Settings
                        </Link>
                        <Link
                          href="#"
                          className="font-medium hover:bg-gray-200 p-2 rounded-md"
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
