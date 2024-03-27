import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { StarIcon, StarFilledIcon } from "@radix-ui/react-icons";

export function Main() {
  return (
    <div className="pt-20 px-4 pb-4">
      <Tabs defaultValue="decks" className="w-full">
        <TabsList className="mx-auto w-full max-w-[400px] grid grid-cols-2">
          <TabsTrigger value="decks">Decks</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
        </TabsList>
        <TabsContent value="decks" className="grid grid-cols-1 max-w-[400px] mx-auto md:max-w-full md:grid-cols-3 lg:grid-cols-5 gap-4 py-2">
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarFilledIcon className="size-7 text-yellow-300"></StarFilledIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold text-ellipsis overflow-hidden text-nowrap ...">
	У него́ была́ кварти́ра в це́нтре го́рода.</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-4">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
          <div className="p-3 bg-secondary rounded-lg">
            <div className="flex h-full">
              <div className="flex-grow grid">
                <h1 className="text-2xl font-bold">Romanian</h1>
                <p className="mt-auto">42 Cards</p>
              </div>
              <div className="grid place-items-center ms-auto">
                <StarIcon className="size-7"></StarIcon>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="cards">Change your password here.</TabsContent>
      </Tabs>
    </div>
  );
}
