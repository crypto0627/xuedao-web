"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-md flex justify-center text-gray-500 dark:text-gray-400">
        © 2024 XueDAO. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
