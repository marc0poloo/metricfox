import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-secondary-300" data-oid="u9u-qcf">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        data-oid="b8.iid9">

        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
          data-oid="pugak-x">

          {/* Company Info */}
          <div className="col-span-1 md:col-span-2" data-oid="eypgv_n">
            <div
              className="flex items-center space-x-2 mb-4"
              data-oid="d:7pxj_">

              <div
                className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
                data-oid="9yavxx-">

                <span
                  className="text-white font-bold text-sm"
                  data-oid="-hzq0pf">

                  TR
                </span>
              </div>
              <span className="text-xl font-bold text-white" data-oid=":5raznp">
                TechRecruit Pro
              </span>
            </div>
            <p className="text-secondary-400 mb-6 max-w-md" data-oid="iq12jsk">
              Connecting top IT talent with leading companies. We specialize in
              matching skilled professionals with opportunities that drive
              innovation and growth.
            </p>
            <div className="flex space-x-4" data-oid="f64ua98">
              <a
                href="#"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                data-oid="sdj3ojh">

                <Linkedin className="w-5 h-5" data-oid="y-dljt5" />
              </a>
              <a
                href="#"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                data-oid="3tz99me">

                <Twitter className="w-5 h-5" data-oid="gu59urh" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div data-oid="a03g.xc">
            <h3 className="text-white font-semibold mb-4" data-oid="_xnxf1u">
              Quick Links
            </h3>
            <ul className="space-y-2" data-oid=".1-jd96">
              <li data-oid="6uo5g:6">
                <Link
                  href="/candidates"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  data-oid="hhl:p_o">

                  For Candidates
                </Link>
              </li>
              <li data-oid="w.rt.h8">
                <Link
                  href="/companies"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  data-oid="2i85vmg">

                  For Companies
                </Link>
              </li>
              <li data-oid="gj-1gh7">
                <Link
                  href="/jobs"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  data-oid="pf1p-q9">

                  Job Portal
                </Link>
              </li>
              <li data-oid="4b3y8eh">
                <Link
                  href="/about"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  data-oid="5fmgbe6">

                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div data-oid="5e61jzr">
            <h3 className="text-white font-semibold mb-4" data-oid="rd7_80u">
              Contact
            </h3>
            <ul className="space-y-3" data-oid="yyp1ew0">
              <li className="flex items-center space-x-2" data-oid="u57z0:p">
                <Mail className="w-4 h-4 text-primary-400" data-oid="ej1wbn:" />
                <span className="text-secondary-400" data-oid="px2:wm8">
                  contact@techrecruitpro.com
                </span>
              </li>
              <li className="flex items-center space-x-2" data-oid="ao99xol">
                <Phone
                  className="w-4 h-4 text-primary-400"
                  data-oid="otc_l5_" />

                <span className="text-secondary-400" data-oid="ftepysq">
                  +1 (555) 123-4567
                </span>
              </li>
              <li className="flex items-center space-x-2" data-oid="z98j_sf">
                <MapPin
                  className="w-4 h-4 text-primary-400"
                  data-oid="i:bfgc-" />

                <span className="text-secondary-400" data-oid="_vt2v_c">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t border-secondary-800 mt-8 pt-8 text-center"
          data-oid="igql5bd">

          <p className="text-secondary-400" data-oid="672nyma">
            © 2024 TechRecruit Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}