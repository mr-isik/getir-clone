import React from "react";
import { Collapse } from "react-collapse";
import { useState, useEffect } from "react/cjs/react.development";
import { useWindowWidth } from "@react-hook/window-size";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpened, setIsOpened] = useState(true);

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpened(!isOpened);
    }
  };

  useEffect(() => {
    if (isOpened && windowWidth <= 768) {
      setIsOpened(false);
    }

    if (!isOpened && windowWidth > 768) {
      setIsOpened(true);
    }
  }, []);

  return (
    <section>
      <h4
        onClick={toggleCollapse}
        className="mb-4 text-primary-brand-color font-normal text-lg flex items-center justify-between"
      >
        {title}
        <button className="ml-2 grid md:hidden place-items-center w-6 h-6 rounded-lg bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
          <span
            className={`transition-all transform ${
              isOpened ? "rotate-180" : ""
            }`}
          >
            <MdOutlineKeyboardArrowDown size={18} />
          </span>
        </button>
      </h4>
      <Collapse isOpened={isOpened}>
        <nav className="flex flex-col gap-y-3">
          {items.map((child, index) => (
            <a
              href="/"
              key={index}
              className="text-gray-900 transition-colors hover:text-primary-brand-color text-sm"
            >
              {child.title}
            </a>
          ))}
        </nav>
      </Collapse>
    </section>
  );
}
