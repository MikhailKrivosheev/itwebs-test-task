import Image from 'next/image';

import Link from '@/components/shared/link';

import { MENUS } from '@/constants/menus';
import { ROUTE } from '@/constants/route';

import logo from '@/svgs/logo.svg';

function Footer() {
  return (
    <footer className="relative border-t border-[#000]/10 py-10 px-safe pb-safe-or-10">
      <div className="container">
        <div className="flex justify-between md:flex-col">
          <div className="flex flex-col">
            <Link className="block" href={ROUTE.index}>
              <Image src={logo} width={90} height={18} alt="" />
              <span className="sr-only">NextJS</span>
            </Link>
          </div>
          <nav className="flex w-fit justify-between gap-x-32 gap-y-8 lg:gap-x-20 md:mt-8 md:gap-x-24 xs:grid xs:w-full xs:grid-cols-2 xs:gap-x-5">
            {MENUS.footer.main.map(({ heading, links }) => (
              <div className="flex flex-col" key={heading}>
                <span className="text-14 leading-none tracking-tight text-[#000]/60">
                  {heading}
                </span>
                <ul className="mt-7 flex flex-col gap-y-5 sm:mt-6">
                  {links?.map(({ label, href }) => {
                    const isExternalUrl = (href as string).startsWith('http');

                    return (
                      <li className="flex" key={label}>
                        <Link
                          className="whitespace-nowrap font-medium leading-none tracking-tight opacity-80"
                          href={href}
                          size="md"
                          rel={isExternalUrl ? 'noopener noreferrer' : undefined}
                          target={isExternalUrl ? '_blank' : undefined}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mt-11 flex items-center justify-between gap-y-8 md:mt-8 md:flex-col-reverse md:items-start sm:mt-10 sm:gap-y-10">
          <p className="text-14 leading-none tracking-tight text-[#000]/60">
            © {new Date().getFullYear()} — Copyright
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
