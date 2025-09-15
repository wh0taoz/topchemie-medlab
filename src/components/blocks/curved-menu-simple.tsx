import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface NavItem {
  heading: string;
  href: string;
  subheading?: string;
}

interface CurvedMenuProps {
  navItems?: NavItem[];
}

const defaultNavItems: NavItem[] = [
  {
    heading: "Početna",
    href: "/",
    subheading: "Dobrodošli na naš sajt",
  },
  {
    heading: "O Nama",
    href: "/o-nama",
    subheading: "Saznajte više o nama",
  },
  {
    heading: "Proizvodi",
    href: "/proizvodi",
    subheading: "Naši proizvodi i usluge",
  },
  {
    heading: "Kontakt",
    href: "/kontakt",
    subheading: "Kontaktirajte nas",
  },
];

const MENU_SLIDE_ANIMATION = {
  initial: { x: "100%" },
  enter: {
    x: "0%",
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const
    }
  },
  exit: {
    x: "100%",
    transition: {
      duration: 0.6,
      ease: "easeInOut" as const
    },
  },
};

const NavLink: React.FC<{
  heading: string;
  href: string;
  index: number;
  setIsActive: (active: boolean) => void;
}> = ({ heading, href, index, setIsActive }) => {
  const handleClick = () => {
    setIsActive(false);
  };

  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-gray-200 py-4"
    >
      <Link
        to={href}
        onClick={handleClick}
        className="flex items-center gap-4 text-2xl font-light text-gray-800 hover:text-blue-600 transition-colors"
      >
        <span className="text-sm text-gray-400">{String(index).padStart(2, '0')}</span>
        <span>{heading}</span>
      </Link>
    </motion.div>
  );
};

const CurvedMenu: React.FC<CurvedMenuProps> = ({
  navItems = defaultNavItems,
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={handleToggle}
          className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors shadow-lg"
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform duration-300 ${
                isActive ? "rotate-45 translate-y-0.5" : "mb-1"
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-opacity duration-300 ${
                isActive ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-800 transition-transform duration-300 ${
                isActive ? "-rotate-45 -translate-y-0.5" : "mt-1"
              }`}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isActive && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40"
              onClick={() => setIsActive(false)}
            />
            <motion.div
              variants={MENU_SLIDE_ANIMATION}
              initial="initial"
              animate="enter"
              exit="exit"
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                  <button
                    onClick={() => setIsActive(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav>
                  {navItems.map((item, index) => (
                    <NavLink
                      key={item.href}
                      {...item}
                      index={index + 1}
                      setIsActive={setIsActive}
                    />
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CurvedMenu;