"use client";

import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Checkbox } from "./components/Checkbox";

type Page = {
  id: string;
  name: string;
};

export default function Home() {
  const pages: Page[] = [
    { id: "all", name: "All pages" },
    { id: "page1", name: "Page 1" },
    { id: "page2", name: "Page 2" },
    { id: "page3", name: "Page 3" },
    { id: "page4", name: "Page 4" },
  ];

  const [selectedPages, setSelectedPages] = useState<Record<string, boolean>>(
    pages.reduce((acc, page) => ({ ...acc, [page.id]: false }), {})
  );

  const togglePage = (pageId: string) => {
    if (pageId === "all") {
      // If "all" is toggled, update all other pages to match
      const newValue = !selectedPages.all;
      const updatedPages = { ...selectedPages };

      pages.forEach((page) => {
        updatedPages[page.id] = newValue;
      });

      setSelectedPages(updatedPages);
    } else {
      // Toggle individual page
      setSelectedPages((prev) => {
        const newState = {
          ...prev,
          [pageId]: !prev[pageId],
        };

        // Check if all individual pages are selected
        const allPagesSelected = pages
          .filter((page) => page.id !== "all")
          .every((page) => newState[page.id]);

        // Update "all" checkbox accordingly
        newState.all = allPagesSelected;

        return newState;
      });
    }
  };

  const handleDone = () => {
    console.log("Selected pages:", selectedPages);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[370px] bg-white border border-[#EEEEEE] rounded-md p-5 shadow-md">
        <div className="space-y-4">
          {pages.map((page) => (
            <Checkbox
              key={page.id}
              checked={selectedPages[page.id]}
              onChange={() => togglePage(page.id)}
              label={page.name}
              id={page.id}
            />
          ))}

          <div className="pt-4 mt-2 border-t border-gray-200">
            <Button onClick={handleDone} variant="primary" fullWidth>
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
