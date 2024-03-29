import React from "react";

const Main = () => {
  return (
    <>
      <main
        class="
    grid
    gap-12
    sm:gap-16
    md:gap-24
    lg:gap-32
    px-8
    overflow-hidden
    "
      >
        <a
          href="#"
          class="
    py-2
    px-6
    bg-amber-400
    dark:text-neutral-900
    mx-auto
    my-12
    flex
    gap-2
    shadow-xl
    hover:shadow-none
    transition-shadow
    focus:outline-none
    focus-visible:ring-4
    ring-neutral-900
    rounded-md
    ring-offset-4
    ring-offset-white
    dark:ring-amber-400
    dark:ring-offset-neutral-800
    "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          <span>Download the App</span>
        </a>
        <section aria-labelledby="qualities" class="relative">
          <img
            src="src/assets/dots.svg"
            class="
      hidden
      lg:block
      absolute
      top-1/2
      -translate-y-1/2
      -left-24
      xl:-left-7
      "
            alt="dots"
            aria-hidden="true"
          />
          <img
            src="src/assets/dots.svg"
            class="
      hidden
      lg:block
      absolute
      top-1/2
      -translate-y-1/2
      -right-24
      xl:-right-7
      "
            alt="dots"
            aria-hidden="true"
          />
          <h2 id="qualities" class="sr-only">
            Our Qualities
          </h2>
          <div
            class="container
        mx-auto
        max-w-5xl
        flex
        gap-12
        flex-wrap
        items-start
        justify-center
        md:justify-between
      "
          >
            <div
              class="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
      "
            >
              <div
                class="
            rounded-full
            border-8
            border-amber-400
            p-4
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 class="text-3xl font-bold">Safe</h3>
              <p>Our products are secure and private out-of-the-box</p>
            </div>
            <div
              class="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
        "
            >
              <div
                class="
          rounded-full
          border-8
          border-amber-400
          p-4
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 class="text-3xl font-bold">Efficient</h3>
              <p>Feel good about your wallet and the environment</p>
            </div>
            <div
              class="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
        "
            >
              <div
                class="
          rounded-full
          border-8
          border-amber-400
          p-4
          "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-14 w-14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 class="text-3xl font-bold">Proven</h3>
              <p>Leading the Smart Home world for 10 years</p>
            </div>
          </div>
        </section>
        <section
          aria-labelledby="partners"
          class="text-center grid gap-8 place-items-center"
        >
          <div class="grid gap-4">
            <h2 id="partners" class="text-4xl font-bold text-amber-400">
              Our Partners
            </h2>
            <p class="w-full max-w-lg">
              We’ve partnered with hundreds of smart home brands to help you
              create a smart home that fits your needs and doesn’t lock you in.
            </p>
          </div>
          <div class="flex flex-wrap justify-center gap-8 md:gap-x-16 max-w-2xl mx-auto">
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner1.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner2.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner3.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner4.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner5.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner6.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
            <div class="p-4 bg-white dark:bg-neutral-600 shadow-md dark:shadow-xl rounded-md">
              <img
                src="src/assets/partner7.svg"
                alt="Partner"
                class="h-16 w-16"
              />
            </div>
          </div>
        </section>
        <section aria-labelledby="home" class="relative">
          <div class="flex flex-wrap-reverse gap-8 justify-center">
            <div class="flex gap-6 flex-wrap flex-col items-start lg:justify-center">
              <div class="flex flex-wrap flex-col items-start gap-2">
                <h2 class="text-4xl font-bold">Relax, you’re home!</h2>
                <p class="max-w-md">
                  All our supported hardware includes traditional inputs so you
                  can integrate our products into your house in a way that’s
                  best for everyone.
                </p>
              </div>
              <a
                href="#"
                class="
            py-2
            px-6
            bg-amber-400
            dark:text-neutral-900
            flex
            gap-2
            shadow-xl
            hover:shadow-none
            transition-shadow
            focus:outline-none
            focus-visible:ring-4
            ring-neutral-900
            rounded-md
            ring-offset-4
            ring-offset-white
            dark:ring-amber-400
            dark:ring-offset-neutral-800
        "
              >
                Sign Up
              </a>
            </div>
            <img src="src/assets/table.png" alt="Table" />
          </div>
          <div
            class="
        absolute
        -bottom-6
        -right-32
        -z-10
        aspect-square
        md:border-8
        border-amber-400
        rounded-full
        md:w-64
        lg:w-96
        xl:max-w-lg
    "
          ></div>
          <div
            class="
        bg-teal-900
        h-24
        xl:h-48
        -mx-8 
        mt-12
        xl:mt-0
        xl:absolute
        w-screen
        -bottom-8
        -z-10
    "
          ></div>
        </section>
      </main>
      <section
        aria-labelledby="contact"
        class="container mx-auto px-8 overflow-hidden"
      >
        <div class="flex flex-wrap justify-center gap-12 md:gap-6 lg:gap-20">
          <div class="md:flex-1 md:max-w-sm relative">
            <img src="src/assets/lamp.png" alt="Lamp" class="mx-auto" />
            <a
              href="#"
              class="
              py-2
              px-6
              bg-amber-400
              dark:text-neutral-900
              w-max
              mx-auto
              mt-12
              md:mb-12
              flex
              gap-2
              shadow-xl
              hover:shadow-none
              transition-shadow
              focus:outline-none
              focus-visible:ring-4
              ring-neutral-900
              rounded-md
              ring-offset-4
              ring-offset-white
              dark:ring-amber-400
              dark:ring-offset-neutral-800
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download the App</span>
            </a>
            <img
              src="/assets/app.svg"
              alt="app"
              width="240"
              class="hidden md:block drop-shadow-xl absolute left-1/2 -translate-x-1/2 max-w-16 xl:max-w-xs"
            />
            <div
              class="
              absolute
              -bottom-18
              left-1/2
              -translate-x-1/2
              -z-10
              aspect-square
              md:border-8
              border-amber-400
              rounded-full
              md:w-72
              lg:w-96
            "
            ></div>
          </div>
          <form
            class="
            relative
            border-8
            border-neutral-900
            p-6
            rounded-lg
            grid
            gap-8
            md:flex-1
            md:max-w-lg
            my-4
            md:my-12
            lg:my-16
            bg-white
            dark:bg-neutral-800
            w-full
        "
          >
            <h2 id="contact" class="text-3xl font-bold">
              Let’s Connect
            </h2>
            <div class="relative">
              <input
                type="text"
                id="name"
                class="
            peer
            form-input
            w-full
            border-4
            border-amber-400
            rounded-md
            focus:ring-4
            dark:focus:ring-offset-2
            focus:ring-amber-400
            focus:border-amber-400
            focus:outline-none
            dark:bg-amber-400
            dark:text-neutral-900
            placeholder-transparent
        "
                placeholder="Your Name"
              />
              <label
                for="name"
                class="
          text-neutral-500
          text-sm
          font-bold
          uppercase
          absolute
          -top-4
          left-2
          -translate-y-1/2
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-neutral-900
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
          dark:peer-focus:text-neutral-300
        "
              >
                Your Name
              </label>
            </div>
            <div class="relative">
              <input
                type="email"
                id="email"
                class="
            peer
            form-input
            w-full
            border-4
            border-amber-400
            rounded-md
            focus:ring-4
            dark:focus:ring-offset-2
            focus:ring-amber-400
            focus:border-amber-400
            focus:outline-none
            dark:bg-amber-400
            dark:text-neutral-900
            placeholder-transparent
          "
                placeholder="Your Email"
              />
              <label
                for="email"
                class="
          text-neutral-500
          text-sm
          font-bold
          uppercase
          absolute
          -top-4
          left-2
          -translate-y-1/2
          transition-all
          peer-placeholder-shown:left-4
          peer-placeholder-shown:top-1/2
          peer-placeholder-shown:text-neutral-900
          peer-focus:-top-4
          peer-focus:left-2
          peer-focus:text-neutral-600
          dark:peer-focus:text-neutral-300
        "
              >
                Your Email
              </label>
            </div>
            <div class="relative">
              <textarea
                name="content"
                id="content"
                cols="20"
                rows="5"
                class="
          peer
          form-textarea
          resize-none
          w-full
          border-4
          border-amber-400
          rounded-md
          focus:ring-4
          dark:focus:ring-offset-2
          focus:ring-amber-400
          focus:border-amber-400
          focus:outline-none
          dark:bg-amber-400
          dark:text-neutral-900
          placeholder-transparent
        "
                placeholder="How can we help?"
              ></textarea>
              <label
                for="content"
                class="
            text-neutral-500
            text-sm
            font-bold
            uppercase
            absolute
            -top-3
            left-2
            -translate-y-1/2
            transition-all
            peer-placeholder-shown:left-4
            peer-placeholder-shown:top-6
            peer-placeholder-shown:text-neutral-900
            peer-focus:-top-4
            peer-focus:left-2
            peer-focus:text-neutral-600
            dark:peer-focus:text-neutral-300
          "
              >
                How can we help?
              </label>
            </div>
            <a
              role="menuitem"
              class="
          py-2
          px-6
          bg-neutral-900
          text-white
          w-max
          shadow-xl
          hover:shadow-none
          transition-shadow
          focus:outline-none
          focus-visible:ring-4
          ring-neutral-900
          rounded-md
          ring-offset-4
          ring-offset-white
          dark:ring-offset-amber-400
        "
              href="/"
            >
              Sign Up
            </a>
          </form>
        </div>
      </section>
    </>
  );
};

export default Main;
