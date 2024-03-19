import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import picture from "./assets/react.svg";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "./theme-provider";
import { CardStackIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons'

const Nav = () => {
  const { setTheme } = useTheme();
  return (
    <div className="w-full fixed border-b border-border/70 h-16">
      <div className="flex bg-background/95 px-4 h-full">
        <div className="font-bold text-2xl cursor-pointer flex items-center px-3 text-foreground">
          <CardStackIcon className="h-full w-6 me-1"></CardStackIcon>
          Flashcards
        </div>
        <span className="flex w-full"></span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="my-auto p-3">
              <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Nav;
