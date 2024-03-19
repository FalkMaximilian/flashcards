import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { CheckIcon, Cross2Icon } from "@radix-ui/react-icons";
import Latex from "react-latex-next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

export function CardView() {
    return (
      <div className=" h-svh pt-16 px-4 pb-4">
        <div className="h-full flex flex-col">
          <div className="flex-none my-4 me-auto">
            <Menubar className=" shadow-lg">
              <MenubarMenu>
                <MenubarTrigger>Decks</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Add to Deck<MenubarShortcut>⌘A</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Remove from Deck<MenubarShortcut>⌘R</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Edit front</MenubarItem>
                  <MenubarItem>Edit back</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Share</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Print</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <div className="lg:hidden flex flex-grow flex-col">
            <div className="flex-grow w-full">
              <div className="w-full h-full grid items-center">
                <AspectRatio ratio={16 / 9}>
                  <Card className=" shadow-2xl mx-auto h-full">
                    <CardContent className="h-full w-full flex flex-col p-2">
                      <div className="flex-grow grid place-items-center">
                        <h1 className="text-3xl w-full flex-grow text-center">
                          <Latex>$Altitude \times 1.253^2$</Latex>
                        </h1>
                      </div>
                    </CardContent>
                  </Card>
                </AspectRatio>
              </div>
            </div>
            <div className="flex-none w-full grid grid-cols-2 gap-4 mt-4">
              <Button className="px-auto py-10 bg-red-500 hover:bg-red-400 shadow-2xl">
                <Cross2Icon className="size-10" />
              </Button>
              <Button className=" p-10 bg-green-500 hover:bg-green-400 shadow-2xl">
                <CheckIcon className="size-10" />
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex flex-grow flex-col">
            <div className="w-full h-full grid grid-cols-6 place-items-center">
              <Button className="mx-auto p-10 col-span-1 bg-red-500 hover:bg-red-400 shadow-2xl">
                <Cross2Icon className="size-10" />
              </Button>
              <div className="col-span-4 w-full">
                <AspectRatio ratio={16 / 9}>
                  <Card className=" shadow-2xl mx-auto h-full">
                    <CardContent className="h-full w-full grid items-center">
                      <h1 className="text-3xl w-full text-center">
                        <Latex>$Altitude \times 1.253^2$</Latex>
                      </h1>
                    </CardContent>
                  </Card>
                </AspectRatio>
              </div>
              <Button className="mx-auto p-10 col-span-1 bg-green-500 hover:bg-green-400 shadow-2xl">
                <CheckIcon className="size-10" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}