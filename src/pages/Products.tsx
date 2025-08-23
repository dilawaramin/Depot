// src/components/Products.jsx
import React, { useState } from "react";
import { ArrowRight, Filter } from "lucide-react";

// Import your JSON data (example: soils)
import soilsData from "../data/soils.json";
import mulchData from "../data/mulch.json";
import aggregateData from "../data/aggregrates.json"
import decorativeData from "../data/decorative.json"
import landscapingData from "../data/landscaping.json"
import buildingData from "../data/building.json"

// Define what a Product looks like
interface Product {
  title: string;
  category: string;
  description: string;
  image: string;
  features?: string[];
  price?: string;
}

// Helper to map JSON data
const loadProducts = (data: any[], category: string): Product[] => {
  return data.map((item) => ({
    title: item.title,
    category,
    description: item.description,
    image: item.image,
    features: item.features || [],
    price: item.price || "",
  }));
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "mulch", name: "Mulch" },
    { id: "aggregate", name: "Aggregates" },
    { id: "soil", name: "Soils & Compost" },
    { id: "decorative", name: "Decorative Stone"},
    { id: "landscaping", name: "Landscaping Supplies" },
    { id: "building", name: "Building Supplies" }
  ];

  // Load dynamic JSON data
  const soils = loadProducts(soilsData, "soil");
  const mulch = loadProducts(mulchData, "mulch")
  const aggregates = loadProducts(aggregateData, "aggregate")
  const decorative = loadProducts(decorativeData, "decorative")
  const landscaping = loadProducts(landscapingData, "landscaping")
  const building = loadProducts(buildingData, "building")

  // Later you can add more JSON imports, e.g.
  // import mulchesData from "../data/mulches.json";
  // const mulches = loadProducts(mulchesData, "mulch");

  // Merge them here
  const products = [
    ...soils,
    ...mulch,
    ...aggregates,
    ...decorative,
    ...landscaping,
    ...building,
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Premium Products
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            From foundational materials to finishing touches, we supply
            everything needed to create exceptional outdoor spaces that exceed
            expectations.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Browse by Category
            </h2>
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
              <span>{filteredProducts.length} Products</span>
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

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          {filteredProducts.length === 0 ? (
            <p className="text-center text-gray-600">
              No products found in this category.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.price}
                    </div> */}
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* <button className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
