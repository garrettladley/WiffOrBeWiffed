import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import React, { useState } from 'react';

import { SignInButton, useUser } from '@clerk/nextjs';
import { Transition } from '@headlessui/react';

import type { PropsWithChildren } from "react";

const imageDimensions = 56;

const Profile = () => {
  const { user, isSignedIn } = useUser();

  return (
    <>
      {!isSignedIn && (
        <SignInButton>
          <a className="rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700">
            Sign in
          </a>
        </SignInButton>
      )}
      {isSignedIn && (
        <div className="flex items-center justify-center p-2">
          <Image
            src={user.profileImageUrl}
            alt="Profile Image"
            className="h-10 w-10 rounded-full"
            width={imageDimensions}
            height={imageDimensions}
          />
        </div>
      )}
    </>
  );
};

const routes = [
  { href: "/", label: "Home" },
  { href: "/baz", label: "Baz" },
];

const isActiveBig = (router: NextRouter, href: string) => {
  const activeStyles =
    "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-700";
  const inactiveStyles =
    "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
  return router.pathname === href ? activeStyles : inactiveStyles;
};

const isActiveSmall = (router: NextRouter, href: string) => {
  const activeStyles =
    "block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700";
  const inactiveStyles =
    "block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white";
  return router.pathname === href ? activeStyles : inactiveStyles;
};

function renderRoutes(
  router: NextRouter,
  isActiveFn: (router: NextRouter, href: string) => string
) {
  return routes.map((route) => (
    <a href={route.href} className={isActiveFn(router, route.href)}>
      {route.label}
    </a>
  ));
}

const wiffleBall = (
  <div className="flex-shrink-0">
    <Image
      src="/assets/ball-art/white-ball-transparent-bg.png"
      alt="Ball"
      width={imageDimensions}
      height={imageDimensions}
    />
  </div>
);

const bigRoutes = (router: NextRouter) => (
  <div className="hidden md:block">
    <div className="ml-10 flex items-baseline space-x-4">
      {renderRoutes(router, isActiveBig)}
    </div>
  </div>
);

const smallRoutes = (router: NextRouter) => (
  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
    {renderRoutes(router, isActiveSmall)}
  </div>
);

type Social = {
  href: string;
  svg: React.ReactNode;
};

const socials: Social[] = [
  {
    href: "https://www.instagram.com/wiff_or_be_wiffed/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/garrettladley/WiffOrBeWiffed",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
];

export const PageLayout = (props: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoaded: userLoaded } = useUser();

  const router = useRouter();

  if (!userLoaded) return <div />;

  return (
    <main>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                {wiffleBall}
                {bigRoutes(router)}
                <div className="absolute right-0 flex items-center justify-center p-4 text-xl">
                  {socials.map((social) => (
                    <div className="flex items-center justify-center p-2">
                      <a href={social.href}>{social.svg}</a>
                    </div>
                  ))}
                  <Profile />
                  <div className="flex items-center justify-between p-2 md:hidden">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      {!isOpen ? (
                        <svg
                          className="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="block h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            show={isOpen}
            enter="transition ease-out duration-100 transform"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="md:hidden" id="mobile-menu">
              {smallRoutes(router)}
            </div>
          </Transition>
        </nav>
        <div>{props.children}</div>
      </div>
    </main>
  );
};
