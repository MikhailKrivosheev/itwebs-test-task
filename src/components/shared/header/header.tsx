'use client';

import Image from 'next/image';

import Burger from '@/components/shared/header/burger';
import Link from '@/components/shared/link';
import MobileMenu from '@/components/shared/mobile-menu';

import { useMobileMenu } from '@/hooks/use-mobile-menu';

import { MENUS } from '@/constants/menus';

import logo from '@/svgs/logo.svg';

function Header() {
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <>
      <header className="absolute left-0 right-0 top-4 z-10 h-[66px] px-safe pt-safe">
        <div className="container h-full">
          <div
            className="md:pl-4.5 relative flex h-full items-center justify-between rounded-full bg-[rgba(255,255,255,0.40)] p-3.5 pl-8 shadow-[0_2px_20.5px_0_rgba(0,0,0,0.05)] backdrop-blur-xl md:py-2.5 md:pr-2.5 sm:py-2.5 sm:pl-3.5 sm:pr-6"
            aria-label="Global"
          >
            <Link href="/" className="flex items-center gap-2 text-20 font-bold">
              <Image src={logo} width={38} height={38} alt="" priority />
              <span className="text-black">ITWEBS</span>
            </Link>
            <nav
              className="absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-[86px] py-3.5 md:hidden"
              aria-label="Global"
            >
              <ul className="flex gap-x-6">
                {MENUS.header.map(({ label, href }) => (
                  <li key={label}>
                    <Link size="sm" theme="black" href={href}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Burger
              className="hidden md:block"
              isToggled={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            />
            <div className="absolute inset-0 -z-10 overflow-hidden rounded-[inherit]" aria-hidden>
              <div className="pointer-events-none absolute -top-[26px] left-[167px] h-[91px] w-[851px] rounded-[100%] bg-[rgba(255,255,255,0.60)] blur-[30px]" />
              <span className="border-linear pointer-events-none absolute inset-0 z-10 rounded-[inherit] bg-[linear-gradient(0deg,#FFFFFF_32%,rgba(225,219,228,0.79)_83%,rgba(153,133,165,0.3))]" />
            </div>
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
    </>
  );
}

export default Header;
