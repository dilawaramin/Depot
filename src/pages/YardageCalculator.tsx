import React, { useState } from "react";
import { Calculator } from "lucide-react";
import { Helmet } from "react-helmet-async";

type Shape = "rectangle" | "circle" | "triangle";

const YardageCalculator = () => {
  const [shape, setShape] = useState<Shape>("rectangle");

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [radius, setRadius] = useState("");
  const [base, setBase] = useState("");
  const [height, setHeight] = useState("");

  const [result, setResult] = useState<number | null>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();

    let cubicYards = 0;

    if (shape === "rectangle") {
      const l = parseFloat(length);
      const w = parseFloat(width);
      const d = parseFloat(depth);
      if (isNaN(l) || isNaN(w) || isNaN(d)) return;
      const cubicFeet = l * w * (d / 12);
      cubicYards = cubicFeet / 27;
    }

    if (shape === "circle") {
      const r = parseFloat(radius);
      const d = parseFloat(depth);
      if (isNaN(r) || isNaN(d)) return;
      const cubicFeet = Math.PI * r * r * (d / 12);
      cubicYards = cubicFeet / 27;
    }

    if (shape === "triangle") {
      const b = parseFloat(base);
      const h = parseFloat(height);
      const d = parseFloat(depth);
      if (isNaN(b) || isNaN(h) || isNaN(d)) return;
      const areaSqFt = 0.5 * b * h;
      const cubicFeet = areaSqFt * (d / 12);
      cubicYards = cubicFeet / 27;
    }

    setResult(cubicYards);
  };

  return (

    <>
      <Helmet>
        <title>Yardage Calculator | Estimate Materials | The Dirt Depot</title>
        <meta
          name="description"
          content="Use our yardage calculator to estimate the amount of soil, mulch, or stone needed for your landscaping project. Quick and easy material estimation."
        />
        <meta property="og:title" content="Yardage Calculator | The Dirt Depot" />
        <meta property="og:description" content="Estimate how much soil, mulch, or stone you need with our yardage calculator." />
        <meta property="og:image" content="/images/logo.jpg" />
        <meta property="og:url" content="https://thedirtdepot.com/yardage-calculator" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Yardage Calculator
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
            Calculate how much material you need for your landscaping project.
            Choose a shape, enter dimensions, and get an instant estimate.
          </p>
        </div>
      </section>

      {/* Shape Selector Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Select Your Project Shape
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => {
                setShape("rectangle");
                setResult(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                shape === "rectangle"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Rectangle / Square
            </button>
            <button
              onClick={() => {
                setShape("circle");
                setResult(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                shape === "circle"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Circle
            </button>
            <button
              onClick={() => {
                setShape("triangle");
                setResult(null);
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                shape === "triangle"
                  ? "bg-green-700 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Triangle
            </button>
          </div>
        </div>
      </section>

      {/* Result Section */}
      {result !== null && (
        <section className="py-12 bg-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-12">
            <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Estimated Material Needed
              </h2>
              <p className="text-4xl font-extrabold text-green-700">
                {result.toFixed(2)} cubic yards
              </p>
              <p className="mt-2 text-gray-600 text-sm">
                (Rounded to 2 decimal places)
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Calculator Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <form
            onSubmit={calculate}
            className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
          >
            {shape === "rectangle" && (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Length (feet)
                  </label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Width (feet)
                  </label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
              </>
            )}

            {shape === "circle" && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Radius (feet)
                </label>
                <input
                  type="number"
                  value={radius}
                  onChange={(e) => setRadius(e.target.value)}
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
            )}

            {shape === "triangle" && (
              <>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Base (feet)
                  </label>
                  <input
                    type="number"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Height (feet)
                  </label>
                  <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
              </>
            )}

            {/* Depth (common to all) */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Depth (inches)
              </label>
              <input
                type="number"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
            >
              <Calculator className="w-5 h-5" />
              <span>Calculate</span>
            </button>
          </form>
        </div>
      </section>
    </div>
    </>
  );
};

export default YardageCalculator;
