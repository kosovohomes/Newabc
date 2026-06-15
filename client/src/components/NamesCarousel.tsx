import { useState } from "react";
import { ChevronLeft, ChevronRight, Download } from "lucide-react";

const postersData = [
  {
    id: 1,
    title: "99 Names of Allah - Part 1",
    names: "Names 1-10",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part1-4unCL34tTywGE6jPecsqQv.png",
  },
  {
    id: 2,
    title: "99 Names of Allah - Part 2",
    names: "Names 11-20",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part2-bLgkj53ywRYwtVnNaXEWVr.png",
  },
  {
    id: 3,
    title: "99 Names of Allah - Part 3",
    names: "Names 21-30",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part3-2DRNnMNHKvcRqFkY4uZW9R.png",
  },
  {
    id: 4,
    title: "99 Names of Allah - Part 4",
    names: "Names 31-40",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part4-ZMx44amLf3tJZHzphkjUnX.png",
  },
  {
    id: 5,
    title: "99 Names of Allah - Part 5",
    names: "Names 41-50",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part5-5kQQPALTUARLCFE5CHwTBS.png",
  },
  {
    id: 6,
    title: "99 Names of Allah - Part 6",
    names: "Names 51-60",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part6-RCkVxjGDkkRTU5V5tNmyjS.png",
  },
  {
    id: 7,
    title: "99 Names of Allah - Part 7",
    names: "Names 61-70",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part7-Giwx3VPSHeanztCkhhMpFA.png",
  },
  {
    id: 8,
    title: "99 Names of Allah - Part 8",
    names: "Names 71-80",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part8-akuZEcrfMPKsaitCKKBfTW.png",
  },
  {
    id: 9,
    title: "99 Names of Allah - Part 9",
    names: "Names 81-90",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part9-9w5p84bqLSuRRhpmkUntXC.png",
  },
  {
    id: 10,
    title: "99 Names of Allah - Part 10",
    names: "Names 91-99",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_part10-A6bFqZAL955qe7ZssUoYef.png",
  },
  {
    id: 11,
    title: "99 Names of Allah",
    names: "Complete Series Overview",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663760833653/C8w87kss3tYXRCa3sfbZyh/99_names_allah_tile_post_mobile-L5dWSQGu62VErDktwqSKmp.png",
  },
];

export default function NamesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? postersData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === postersData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const downloadPoster = async () => {
    const poster = postersData[currentIndex];
    const link = document.createElement("a");
    link.href = poster.image;
    link.download = `${poster.title.replace(/\s+/g, "_")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const currentPoster = postersData[currentIndex];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-blue-100 flex flex-col items-center justify-center p-2 md:p-4">
      {/* Header */}
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-2xl md:text-4xl font-bold text-teal-600 mb-1 md:mb-2 font-poppins">
          99 Names of Allah
        </h1>
        <p className="text-sm md:text-lg text-teal-500 font-fredoka">
          Complete Learning Series
        </p>
      </div>

      {/* Carousel Container */}
      <div className="w-full max-w-sm md:max-w-xl">
        {/* Main Image */}
        <div className="relative bg-white rounded-lg md:rounded-2xl shadow-lg md:shadow-2xl overflow-hidden mb-3 md:mb-6">
          <img
            src={currentPoster.image}
            alt={currentPoster.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between gap-2 md:gap-4 mb-3 md:mb-6">
          <button
            onClick={goToPrevious}
            className="bg-teal-500 hover:bg-teal-600 text-white p-2 md:p-3 rounded-full transition-all transform hover:scale-110 active:scale-95"
            aria-label="Previous poster"
          >
            <ChevronLeft className="w-4 md:w-6 h-4 md:h-6" />
          </button>

          <div className="flex-1 text-center">
            <h2 className="text-lg md:text-2xl font-bold text-teal-600 font-poppins mb-1">
              {currentPoster.title}
            </h2>
            <p className="text-xs md:text-base text-teal-500 font-fredoka">{currentPoster.names}</p>
            <p className="text-xs text-gray-500 mt-1">
              {currentIndex + 1} / {postersData.length}
            </p>
          </div>

          <button
            onClick={goToNext}
            className="bg-teal-500 hover:bg-teal-600 text-white p-2 md:p-3 rounded-full transition-all transform hover:scale-110 active:scale-95"
            aria-label="Next poster"
          >
            <ChevronRight className="w-4 md:w-6 h-4 md:h-6" />
          </button>
        </div>

        {/* Download Button */}
        <button
          onClick={downloadPoster}
          className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-bold py-2 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-lg text-sm md:text-base"
        >
          <Download className="w-4 md:w-5 h-4 md:h-5" />
          Download Poster
        </button>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-1 md:gap-2 mt-3 md:mt-6 flex-wrap">
          {postersData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-teal-600 w-6 md:w-8"
                  : "bg-teal-300 hover:bg-teal-400"
              }`}
              aria-label={`Go to poster ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="mt-6 md:mt-12 text-center max-w-2xl px-2">
        <p className="text-xs md:text-base text-gray-600 font-fredoka">
          Explore all 11 posters featuring the 99 Names of Allah. Each poster
          contains 10 beautiful names with their meanings, perfect for kids aged
          5-12 to learn and memorize.
        </p>
      </div>
    </div>
  );
}
