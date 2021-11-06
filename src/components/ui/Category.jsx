import React from "react";

export default function Category({ category: { id, title, image } }) {
  return (
    <a href="/" className="flex flex-col items-center gap-y-2 group transition hover:bg-purple-50 rounded-sm text-center px-2 py-4">
      <img src={image} alt={title} className="w-12 h-12 rounded-sm border-gray-200 border" />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight">{title}</span>
    </a>
  );
}
