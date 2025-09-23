import React, { useState, useEffect } from "react";
import { FlaskConical, TestTube, Microscope, Calendar, Phone } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactElement;
  items?: MenuItem[];
}

interface TopchemieNavbarProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
}

const TopchemieNavbar = ({
  logo = {
    url: "/",
    src: "/topchemie-logo-main.png", 
    alt: "Topchemie Medlab Logo",
    title: "Topchemie Medlab",
  },
  menu = [
    { title: "O Nama", url: "/" },
    {
      title: "Proizvodi",
      url: "#",
      items: [
        {
          title: "Medicina",
          description: "Medicinski proizvodi i oprema za zdravstvene ustanove",
          icon: <TestTube className="size-5 shrink-0" />,
          url: "/proizvodi/medicina",
        },
        {
          title: "Farmako Industrija",
          description: "Proizvodi za farmaceutsku industriju",
          icon: <FlaskConical className="size-5 shrink-0" />,
          url: "/proizvodi/farmako-industrija",
        },
        {
          title: "Ekocert Deterdženti",
          description: "Ekološki sertifikovani deterdženti i sredstva za čišćenje",
          icon: <Microscope className="size-5 shrink-0" />,
          url: "/proizvodi/ekocert-deterdzenti",
        },
      ],
    },
    { title: "Sajmovi i Kongresi", url: "/sajmovi-kongresi" },
  ],
  mobileExtraLinks = [
    { name: "O Nama", url: "/o-nama" },
    { name: "Kontakt", url: "/kontakt" },
  ],
}: TopchemieNavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current page should always have background
  const shouldAlwaysShowBackground = () => {
    const currentPath = window.location.pathname;
    return currentPath.includes('/sajmovi') ||
           currentPath.includes('/kongresi') ||
           currentPath.includes('/kontakt') ||
           currentPath === '/sajmovi-kongresi';
  };

  const hasBackground = isScrolled || shouldAlwaysShowBackground();

  return (
    <section className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
      hasBackground ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-32 object-contain" alt={logo.alt} />
            </a>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item, hasBackground))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center">
            <a
              className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-900 ${
                hasBackground ? 'text-gray-700' : 'text-white'
              }`}
              href="/kontakt"
            >
              Kontakt
            </a>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="w-32 object-contain" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="w-32 object-contain" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </Accordion>
                  <div className="border-t py-4">
                    <div className="grid grid-cols-2 justify-start">
                      {mobileExtraLinks.map((link, idx) => (
                        <a
                          key={idx}
                          className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                          href={link.url}
                        >
                          {link.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem, hasBackground: boolean) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger className={`hover:text-blue-900 bg-transparent ${hasBackground ? 'text-gray-700' : 'text-white'}`}>
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <a
                    className="flex select-none gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-blue-50 hover:text-blue-900 items-center"
                    href={subItem.url}
                  >
                    <div className="flex items-center justify-center">
                      {subItem.icon}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </a>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-blue-50 hover:text-blue-900 ${
        hasBackground ? 'text-gray-700' : 'text-white'
      }`}
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <a
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-blue-50 hover:text-blue-900"
              href={subItem.url}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </a>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="font-semibold text-gray-700 hover:text-blue-900">
      {item.title}
    </a>
  );
};

export { TopchemieNavbar };