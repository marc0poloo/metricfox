"use client";

import { useState } from "react";
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Filter,
  Star,
  Building2,
  Calendar,
  Euro
} from "lucide-react";
import { mockJobs, jobCategories, experienceLevels, jobTypes, locations } from "@/lib/data";
import { formatCurrency, formatDate } from "@/lib/utils";

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || job.category === selectedCategory;
    const matchesLocation = !selectedLocation || job.location === selectedLocation;
    const matchesExperience = !selectedExperience || job.experienceLevel === selectedExperience;
    const matchesType = !selectedType || job.type === selectedType;

    return matchesSearch && matchesCategory && matchesLocation && matchesExperience && matchesType;
  });

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-dark-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT-Jobs in Deutschland
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Entdecken Sie spannende Karrieremöglichkeiten bei führenden 
              Tech-Unternehmen in ganz Deutschland.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-dark-200">
        <div className="max-w-7xl mx-auto">
          <div className="card">
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Nach Job-Titel, Unternehmen oder Fähigkeiten suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-dark-100 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-dark-100 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  <option value="">Alle Kategorien</option>
                  {jobCategories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-dark-100 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  <option value="">Alle Standorte</option>
                  {locations.map(location => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>

                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="px-4 py-3 bg-dark-100 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  <option value="">Alle Erfahrungslevel</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-3 bg-dark-100 border border-dark-300 text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                >
                  <option value="">Alle Anstellungsarten</option>
                  {jobTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">
              {filteredJobs.length} Jobs gefunden
            </h2>
            <div className="text-gray-300">
              Sortiert nach: Neueste zuerst
            </div>
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="card hover:shadow-xl transition-all duration-300 hover:border-primary-500 cursor-pointer">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-gray-300 mb-3">
                          <div className="flex items-center">
                            <Building2 className="mr-1" size={16} />
                            {job.company.name}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1" size={16} />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Briefcase className="mr-1" size={16} />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-500 mb-1">
                          {formatCurrency(job.salaryMin)} - {formatCurrency(job.salaryMax)}
                        </div>
                        <div className="text-sm text-gray-400">
                          pro Jahr
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-500 rounded-full text-sm">
                        {job.category}
                      </span>
                      <span className="px-3 py-1 bg-dark-300 text-gray-300 rounded-full text-sm">
                        {job.experienceLevel}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar className="mr-1" size={14} />
                        Veröffentlicht am {formatDate(job.postedAt)}
                      </div>
                      <div className="flex items-center">
                        <Star className="text-yellow-500 mr-1" size={16} />
                        <span className="text-gray-300 text-sm">Top Job</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Search className="mx-auto text-gray-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">
                Keine Jobs gefunden
              </h3>
              <p className="text-gray-300">
                Versuchen Sie andere Suchkriterien oder erweitern Sie Ihre Suche.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-500 opacity-90"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nicht das Richtige dabei?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Registrieren Sie sich und erhalten Sie personalisierte Job-Vorschläge 
            direkt in Ihren Posteingang.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
              <Briefcase className="mr-2" size={20} />
              Jetzt registrieren
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Job-Benachrichtigungen aktivieren
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
