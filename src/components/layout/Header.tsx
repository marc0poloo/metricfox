"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Users, Briefcase, Info, Shield } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
  { name: "Home", href: "/", icon: null },
  { name: "For Candidates", href: "/candidates", icon: Users },
  { name: "For Companies", href: "/companies", icon: Briefcase },
  { name: "Job Portal", href: "/jobs", icon: Briefcase },
  { name: "About Us", href: "/about", icon: Info }];


  return (
    <header
      className="bg-white shadow-sm border-b border-secondary-200 sticky top-0 z-50"
      data-oid="qf4prd1">

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="j-r9.4:">

        <div
          className="flex justify-between items-center h-16"
          data-oid="0n1yrm0">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2"
            data-oid="srdxed2">

            <div
              className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
              data-oid="pu6gyok">

              <span className="text-white font-bold text-sm" data-oid="xi.u5jy">
                TR
              </span>
            </div>
            <span
              className="text-xl font-bold text-secondary-900"
              data-oid="q6ek_5:">

              TechRecruit Pro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-8"
            data-oid="bpjryqn">

            {navigation.map((item) =>
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-1 text-secondary-600 hover:text-primary-600 font-medium transition-colors duration-200"
              data-oid="ammz.y4">

                {item.icon &&
              <item.icon className="w-4 h-4" data-oid="966oy6c" />
              }
                <span data-oid="zj776md">{item.name}</span>
              </Link>
            )}
            <Link
              href="/admin"
              className="flex items-center space-x-1 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200"
              data-oid="5oqo60p">

              <Shield className="w-4 h-4" data-oid="f_n.j0e" />
              <span data-oid="m-:-jqs">Admin</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-secondary-600 hover:text-primary-600 hover:bg-secondary-100"
            data-oid="8o9bz8:">

            {isMenuOpen ?
            <X className="w-6 h-6" data-oid="-wm4syw" /> :

            <Menu className="w-6 h-6" data-oid=":ea9vq9" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen &&
        <div
          className="md:hidden py-4 border-t border-secondary-200"
          data-oid="iyxnfms">

            <nav className="flex flex-col space-y-2" data-oid="vpg_ifd">
              {navigation.map((item) =>
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg text-secondary-600 hover:text-primary-600 hover:bg-secondary-50 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
              data-oid="t7gzmx2">

                  {item.icon &&
              <item.icon className="w-4 h-4" data-oid="qm:ia4k" />
              }
                  <span data-oid="xvhl4-a">{item.name}</span>
                </Link>
            )}
              <Link
              href="/admin"
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 font-medium transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
              data-oid="_mk5m43">

                <Shield className="w-4 h-4" data-oid="u8v1s3m" />
                <span data-oid="vxzfu7z">Admin</span>
              </Link>
            </nav>
          </div>
        }
      </div>
    </header>);

}