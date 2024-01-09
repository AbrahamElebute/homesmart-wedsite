import React from "react";

const Header = () => {
  return (
    <header class="relative pt-16 md:pt-24 lg:pt-48">
      <div
        class="
    absolute
    inset-0
    bottom-8
    md:bottom-24
    xl:bottom-32
    -z-10
    bg-gradient-to-b
    from-amber-400
    to-amber-600
    "
      ></div>
      <div
        class="
    container
    mx-auto
    grid
    grid-rows-1
    place-items-end
    px-2
  "
      >
        <img
          src="src/assets/couch.png"
          class="
      row-start-1
      row-end-2
      col-start-1
      col-end-2
      mx-auto
      "
          alt="Couch"
        />
        <img
          src="src/assets/app.svg"
          class="
      row-start-1
      row-end-2
      col-start-1
      col-end-2
      mx-auto
      w-40
      sm:w-52
      md:w-64
      lg:w-72
      "
          alt="app"
        />
      </div>
    </header>
  );
};

export default Header;
