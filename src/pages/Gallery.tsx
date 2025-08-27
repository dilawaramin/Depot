import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { X, Filter } from "lucide-react";

// Import JSON project data
import projectsData from "../data/projects.json";

// Define what a Project looks like
interface Project {
  title: string;
  category: string;
  description: string;
  src: string;
}

// Helper to map JSON data
const loadProjects = (data: any[]): Project[] => {
  return data.map((item) => ({
    title: item.title,
    category: item.category,
    description: item.description,
    src: item.src,
  }));
};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "landscapers", name: "Landscapers" },
    { id: "homeowners", name: "Homeowners" },
    { id: "commercial", name: "Commercial" },
    { id: "hardscape", name: "Hardscape" },
    { id: "gardens", name: "Planting & Gardens" },
  ];

  // Load project data from JSON
  const projects: Project[] = loadProjects(projectsData);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Customer Project Showcase
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Explore real projects created by landscapers, homeowners, and
            businesses using our premium materials. Email us with pictures of your project for a chance to be featured!
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse by Category
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span>{filteredProjects.length} Projects</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                  selectedCategory === category.id
                    ? "bg-green-700 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length === 0 ? (
            <p className="text-center text-gray-600">
              No projects found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2"
                  onClick={() => setSelectedImage(project.src)}
                >
                  <img
                    src={project.src}
                    alt={project.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-sm font-semibold bg-green-600 px-3 py-1 rounded-full mb-2 inline-block">
                        {categories.find((cat) => cat.id === project.category)
                          ?.name || project.category}
                      </div>
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-200 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Start Your Own Project?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you’re a professional landscaper or a homeowner, our
            products can bring your outdoor vision to life. Let’s get started
            today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors hover:scale-105 transform duration-300 text-center"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
