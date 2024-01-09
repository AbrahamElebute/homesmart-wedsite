import React from "react";

const navbar = () => {
  return (
    <nav class="mx-auto p-4 bg-amber-400">
      <div
        class="
      container
      mx-auto
      flex
      items-center
      justify-between
    "
      >
        <a
          href="/"
          class="
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-400
        lg:absolute
        lg:left-1/2
        lg:-translate-x-1/2
        lg:top-9
        z-50
        hover:opacity-75
        transition-opacity
      "
          aria-label="Go to homepage"
        >
          <img
            src="src/assets/logo.svg"
            width="200"
            class="w-48 md:w-64 lg:w-72"
            alt="Home Smart Logo"
          />
        </a>
        <button
          id="menu"
          class="
        lg:hidden
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-400
        text-neutral-900
        hover:text-neutral-600
        transition-colors
        "
          aria-expanded="false"
          aria-label="Open Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          role="menubar"
          class="
        hidden
        flex-col
        gap-4
        absolute
        z-40
        right-0
        left-0
        top-16
        bg-amber-400
        shadow-xl
        text-center
        text-lg
        p-6
        items-center
        lg:flex
        lg:flex-row
        lg:static
        lg:shadow-none
        lg:justify-between
        lg:w-full
        "
        >
          <a
            role="menuitem"
            class="
        py-1
        px-6
        dark:text-neutral-900
        focus:outline-none
        focus-visible:ring-4
        ring-neutral-900
        rounded-sm
        ring-offset-4
        ring-offset-amber-400
        hover:text-neutral-600
        transition-colors
        "
            href="/"
          >
            Home
          </a>
          <a
            role="menuitem"
            class="
          py-1
          px-6
          dark:text-neutral-900
          focus:outline-none
          focus-visible:ring-4
          ring-neutral-900
          rounded-sm
          ring-offset-4
          ring-offset-amber-400
          hover:text-neutral-600
          transition-colors
          lg:mr-auto
          "
            href="/"
          >
            Contact
          </a>
          <a
            role="menuitem"
            class="
          py-1
          px-6
          dark:text-neutral-900
          focus:outline-none
          focus-visible:ring-4
          ring-neutral-900
          rounded-sm
          ring-offset-4
          ring-offset-amber-400
          hover:text-neutral-600
          transition-colors
          "
            href="/"
          >
            Login
          </a>
          <a
            role="menuitem"
            class="
          py-2
          px-6
          bg-teal-900
          text-white
          shadow-xl
          hover:shadow-none
          transition-shadow
          focus:outline-none
          focus-visible:ring-4
        ring-neutral-900
          rounded-md
          ring-offset-4
        ring-offset-amber-400
        "
            href="/"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default navbar;