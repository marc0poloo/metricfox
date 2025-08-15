"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Users,
  Building2,
  Briefcase,
  CheckCircle,
  Star,
  TrendingUp,
  Code,
  Database,
  Cpu,
  Globe,
  MapPin,
  Award,
  Quote } from
"lucide-react";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5; // We have 7 testimonials, showing 3 at a time on desktop

  const testimonials = [
    {
      name: "Sarah M.",
      role: "Senior Frontend Developer",
      text: "Dank MetricFox habe ich meinen Traumjob als Senior Developer gefunden. Der Prozess war professionell und die Betreuung erstklassig."
    },
    {
      name: "Michael K.",
      role: "CTO, StartupTech GmbH",
      text: "Als Startup haben wir schnell qualifizierte Entwickler benötigt. MetricFox hat uns innerhalb von 2 Wochen das perfekte Team vermittelt."
    },
    {
      name: "Anna L.",
      role: "DevOps Engineer",
      text: "Die Beratung war hervorragend. Ich habe nicht nur einen neuen Job, sondern auch eine 30% Gehaltserhöhung erhalten."
    },
    {
      name: "Thomas B.",
      role: "Full Stack Developer",
      text: "Excellente Personalberatung! MetricFox hat mir geholfen, meine Karriere auf das nächste Level zu bringen. Top Service!"
    },
    {
      name: "Lisa H.",
      role: "HR Managerin, TechFlow AG",
      text: "Wir haben über MetricFox drei fantastische Entwickler gefunden. Der Matching-Prozess ist wirklich beeindruckend und effizient."
    },
    {
      name: "David R.",
      role: "Data Scientist",
      text: "Nach 6 Monaten Jobsuche hat MetricFox mir in nur 3 Wochen mehrere interessante Angebote vermittelt. Absolut empfehlenswert!"
    },
    {
      name: "Alexandra S.",
      role: "IT-Leiterin, Digital Solutions",
      text: "Als IT-Leiterin bin ich begeistert von der Qualität der Kandidaten. MetricFox versteht unsere Anforderungen perfekt."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="min-h-screen bg-dark-50 relative overflow-hidden"
      data-oid="7py72bt">

      {/* Animated Background Elements */}
      <div
        className="absolute inset-0 tech-grid opacity-30"
        data-oid="w8yw78x">
      </div>
      <div className="floating-element top-20 left-10" data-oid="8iu0_eq">
        <Code className="text-primary-500 w-8 h-8" data-oid="ft0f._a" />
      </div>
      <div
        className="floating-element top-40 right-20"
        style={{ animationDelay: "2s" }}
        data-oid="aa4m-ae">

        <Database className="text-primary-400 w-6 h-6" data-oid="6rth4:9" />
      </div>
      <div
        className="floating-element bottom-40 left-20"
        style={{ animationDelay: "4s" }}
        data-oid="31qat0z">

        <Cpu className="text-primary-600 w-10 h-10" data-oid=":9rvtm1" />
      </div>
      <div
        className="floating-element top-60 right-10"
        style={{ animationDelay: "1s" }}
        data-oid="qfbonyy">

        <Globe className="text-primary-300 w-7 h-7" data-oid="x.jk-mo" />
      </div>

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 sm:px-6 lg:px-8 z-10"
        data-oid="_tavbc_">

        <div className="max-w-7xl mx-auto" data-oid="3t65rn_">
          <div className="text-center" data-oid=".:f5_7t">
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              data-oid="0l19cn-">

              Verbinden Sie Top IT-Talente mit
              <span className="text-primary-500 block mt-2" data-oid="vypqtrl">
                führenden Unternehmen
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              data-oid="xv5i:5o">

              Professionelle Personalvermittlung für Entwickler, Ingenieure und
              Tech-Experten. Wir schlagen die Brücke zwischen außergewöhnlichen
              Talenten und innovativen Unternehmen.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              data-oid="-lbff8_">

              <Link
                href="/kandidaten"
                className="btn-primary text-lg px-8 py-3 inline-flex items-center justify-center"
                data-oid="a9kn775">

                Ich suche einen Job
                <ArrowRight className="ml-2" size={20} data-oid="bq6i68m" />
              </Link>
              <Link
                href="/unternehmen"
                className="btn-secondary text-lg px-8 py-3 inline-flex items-center justify-center"
                data-oid="_r4khk3">

                Wir suchen Talente
                <ArrowRight className="ml-2" size={20} data-oid="7mi.901" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Groups Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100 relative"
        data-oid="r2ggnhd">

        <div className="max-w-7xl mx-auto" data-oid="51_5b10">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            data-oid="403t1po">

            Wen wir unterstützen
          </h2>
          <div className="grid md:grid-cols-2 gap-8" data-oid="3vu6.1_">
            {/* For Candidates */}
            <div
              className="card hover:shadow-xl transition-all duration-300 hover:border-primary-500 group"
              data-oid="e0p_elc">

              <div className="text-center" data-oid="t5wvp-u">
                <div
                  className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors"
                  data-oid="3.36r:g">

                  <Users
                    className="text-primary-500"
                    size={32}
                    data-oid="11pt:45" />

                </div>
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  data-oid="al9xzju">

                  Für IT-Fachkräfte
                </h3>
                <p className="text-gray-300 mb-6" data-oid=":-bh4rg">
                  Finden Sie Ihren Traumjob bei führenden Tech-Unternehmen.
                  Laden Sie Ihren Lebenslauf hoch, präsentieren Sie Ihre
                  Fähigkeiten und werden Sie mit passenden Karrieremöglichkeiten
                  verbunden.
                </p>
                <ul className="text-left space-y-2 mb-6" data-oid="hvizesm">
                  <li className="flex items-center" data-oid="hgc-4y5">
                    <CheckCircle
                      className="text-primary-500 mr-2"
                      size={16}
                      data-oid="_ph71:1" />

                    <span className="text-gray-300" data-oid="v-b6f7:">
                      Personalisierte Job-Vermittlung
                    </span>
                  </li>
                  <li className="flex items-center" data-oid="15b7yn.">
                    <CheckCircle
                      className="text-primary-500 mr-2"
                      size={16}
                      data-oid="uxr0y3l" />

                    <span className="text-gray-300" data-oid="m1xzfe5">
                      Karriereberatung und Support
                    </span>
                  </li>
                  <li className="flex items-center" data-oid="u31mpp9">
                    <CheckCircle
                      className="text-primary-500 mr-2"
                      size={16}
                      data-oid="juzvmrl" />

                    <span className="text-gray-300" data-oid="idupdpj">
                      Gehaltsverhandlungs-Unterstützung
                    </span>
                  </li>
                </ul>
                <Link
                  href="/kandidaten"
                  className="btn-primary w-full"
                  data-oid="4wdmleo">

                  Als Kandidat starten
                </Link>
              </div>
            </div>

            {/* For Companies */}
            <div
              className="card hover:shadow-xl transition-all duration-300 hover:border-primary-500 group"
              data-oid="mqr-nw-">

              <div className="text-center" data-oid="tguzfhf">
                <div
                  className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-500/30 transition-colors"
                  data-oid="u3h2sz2">

                  <Building2
                    className="text-primary-500"
                    size={32}
                    data-oid="pd291rn" />

                </div>
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  data-oid="jf1t5ii">

                  Für Unternehmen
                </h3>
                <p className="text-gray-300 mb-6" data-oid="6zb9e7s">
                  Zugang zu einem kuratierten Pool vorgeprüfter IT-Fachkräfte.
                  Veröffentlichen Sie Stellenanzeigen, prüfen Sie
                  Kandidatenprofile und finden Sie die perfekte Ergänzung für
                  Ihr Team.
                </p>
                <ul className="text-left space-y-2 mb-6" data-oid="wzt0p.e">
                  <li className="flex items-center" data-oid="x703oqx">
                    <CheckCircle
                      className="text-primary-500 mr-2"
                      size={16}
                      data-oid="oa5j-kd" />

                    <span className="text-gray-300" data-oid="5p2r9w1">
                      Vorgeprüfte Kandidaten
                    </span>
                  </li>
                  <li className="flex items-center" data-oid=":xp2oe4">
                    <CheckCircle
                      className="text-primary-500 mr-2"
                      size={16}
                      data-oid="x-6zfjs" />

                    <span className="text-gray-300" data-oid="veip7dz">
                      Schneller Einstellungsprozess
                    </span>
                  </li>
                  <li className="flex items-center" data-oid="rxe:qcr">
                    <CheckCircle
                      className="text-primary-500 mr-2"
                      size={16}
                      data-oid="09xegvt" />

                    <span className="text-gray-300" data-oid="nakw.mh">
                      Persönlicher Account Manager
                    </span>
                  </li>
                </ul>
                <Link
                  href="/unternehmen"
                  className="btn-primary w-full"
                  data-oid="4m-tc_s">

                  Stellenanzeige veröffentlichen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-200 text-white relative"
        data-oid="9ldws1y">

        <div className="max-w-7xl mx-auto" data-oid="3d3ct1y">
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            data-oid="w3ppm7v">

            <div className="group" data-oid="kmuwth1">
              <div
                className="flex items-center justify-center mb-4"
                data-oid="dvxkt56">

                <TrendingUp
                  className="text-primary-500 group-hover:scale-110 transition-transform"
                  size={48}
                  data-oid="468hd-f" />

              </div>
              <div
                className="text-4xl font-bold text-primary-500 mb-2 animate-pulse-green"
                data-oid="6_kk4n:">

                500+
              </div>
              <div className="text-gray-300" data-oid="3ny8an1">
                Erfolgreiche Vermittlungen
              </div>
            </div>
            <div className="group" data-oid="tw90z:q">
              <div
                className="flex items-center justify-center mb-4"
                data-oid="ae688p.">

                <Users
                  className="text-primary-500 group-hover:scale-110 transition-transform"
                  size={48}
                  data-oid="qi9yr_f" />

              </div>
              <div
                className="text-4xl font-bold text-primary-500 mb-2 animate-pulse-green"
                data-oid="2qe3lis">

                1000+
              </div>
              <div className="text-gray-300" data-oid="29to-1.">
                Aktive Kandidaten
              </div>
            </div>
            <div className="group" data-oid="_dr2g1p">
              <div
                className="flex items-center justify-center mb-4"
                data-oid="t_m37qv">

                <Star
                  className="text-primary-500 group-hover:scale-110 transition-transform"
                  size={48}
                  data-oid="ydww910" />

              </div>
              <div
                className="text-4xl font-bold text-primary-500 mb-2 animate-pulse-green"
                data-oid="eajjtht">

                98%
              </div>
              <div className="text-gray-300" data-oid="zr.sk-z">
                Kundenzufriedenheit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-100"
        data-oid="k__rrw9">

        <div className="max-w-7xl mx-auto" data-oid="4m6zvt6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Was unsere Kunden sagen
            </h2>
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-yellow-500 fill-current" size={24} />
                ))}
              </div>
              <span className="text-white ml-3 text-lg font-semibold">5,0 von 5 Sternen</span>
            </div>
            <p className="text-gray-300">Basierend auf über 200 Bewertungen</p>
          </div>
          
          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                    <div className="card text-center h-full">
                      <div className="flex justify-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="text-yellow-500 fill-current" size={16} />
                        ))}
                      </div>
                      <Quote className="text-primary-500 mx-auto mb-4" size={24} />
                      <p className="text-gray-300 mb-4 italic text-sm">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ArrowRight className="rotate-180" size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-colors duration-200"
            >
              <ArrowRight size={20} />
            </button>

            {/* Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {[...Array(totalSlides)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    i === currentSlide ? 'bg-primary-500' : 'bg-gray-600 hover:bg-primary-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Germany Map Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-dark-200"
        data-oid="n2b874b">

        <div className="max-w-7xl mx-auto" data-oid="3jj2..d">
          <h2
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            data-oid="eu8bmzm">

            Unsere Erfolge in ganz Deutschland
          </h2>
          <div
            className="grid md:grid-cols-2 gap-12 items-center"
            data-oid=":kmzxro">

            <div data-oid="oor1k89">
              <h3
                className="text-2xl font-bold text-white mb-6"
                data-oid="jauvys6">

                Bundesweite Vermittlungen
              </h3>
              <div className="space-y-4" data-oid="br4ucf5">
                <div className="flex items-center" data-oid="k5kczu4">
                  <MapPin
                    className="text-primary-500 mr-3"
                    size={20}
                    data-oid="s.5p4jh" />

                  <span className="text-gray-300" data-oid="4dvitu7">
                    Berlin: 120+ Vermittlungen
                  </span>
                </div>
                <div className="flex items-center" data-oid="a6qf-np">
                  <MapPin
                    className="text-primary-500 mr-3"
                    size={20}
                    data-oid="plp-odc" />

                  <span className="text-gray-300" data-oid="g_l9:yb">
                    München: 85+ Vermittlungen
                  </span>
                </div>
                <div className="flex items-center" data-oid="vt17qk.">
                  <MapPin
                    className="text-primary-500 mr-3"
                    size={20}
                    data-oid="vx:lwrw" />

                  <span className="text-gray-300" data-oid="c044h-w">
                    Hamburg: 70+ Vermittlungen
                  </span>
                </div>
                <div className="flex items-center" data-oid="4flo:ge">
                  <MapPin
                    className="text-primary-500 mr-3"
                    size={20}
                    data-oid="xtq6my1" />

                  <span className="text-gray-300" data-oid="r78.-6m">
                    Frankfurt: 60+ Vermittlungen
                  </span>
                </div>
                <div className="flex items-center" data-oid="-18yiul">
                  <MapPin
                    className="text-primary-500 mr-3"
                    size={20}
                    data-oid="v6672.4" />

                  <span className="text-gray-300" data-oid="ewodgkz">
                    Köln: 45+ Vermittlungen
                  </span>
                </div>
                <div className="flex items-center" data-oid="zudrvh2">
                  <MapPin
                    className="text-primary-500 mr-3"
                    size={20}
                    data-oid="6fnwk3b" />

                  <span className="text-gray-300" data-oid=":do17mo">
                    Stuttgart: 40+ Vermittlungen
                  </span>
                </div>
              </div>
            </div>
            <div className="card" data-oid="5cc_o20">
              <div className="text-center" data-oid="s4:6j1l">
                <Award
                  className="text-primary-500 mx-auto mb-4"
                  size={64}
                  data-oid="i-bni2p" />

                <h4
                  className="text-xl font-bold text-white mb-2"
                  data-oid="ip02b9v">

                  Deutschlandweite Präsenz
                </h4>
                <p className="text-gray-300" data-oid="kmm_h:l">
                  Von Startups bis zu DAX-Konzernen - wir vermitteln IT-Talente
                  in allen Regionen Deutschlands und unterstützen sowohl Remote-
                  als auch Vor-Ort-Positionen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white relative"
        data-oid="qx-5t-b">

        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"
          data-oid="j9ysz1r">
        </div>
        <div
          className="max-w-4xl mx-auto text-center relative z-10"
          data-oid="zheu873">

          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            data-oid="qpg-i:f">

            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-xl mb-8 text-primary-100" data-oid="v.9fvag">
            Ob Sie nach Ihrer nächsten Karrierechance suchen oder Top-Talente
            benötigen - wir sind hier, um Ihnen zum Erfolg zu verhelfen.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="wsoq6pc">

            <Link
              href="/jobs"
              className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
              data-oid="xlfe9f4">

              <Briefcase className="mr-2" size={20} data-oid="7q.q1fj" />
              Jobs durchsuchen
            </Link>
            <Link
              href="/ueber-uns"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              data-oid="c7uf7d7">

              Mehr über uns erfahren
            </Link>
          </div>
        </div>
      </section>
    </div>);

}