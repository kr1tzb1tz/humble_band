"use client";
import { MapPin } from "lucide-react";

const shows = [
  {
    month: "APR",
    day: "17",
    year: "2026",
    name: "The Silver Rail",
    location: "Wheeling, WV",
    time: "9PM",
  },
  {
    month: "APR",
    day: "18",
    year: "2026",
    name: "Private Event",
    location: "Pittsburgh, PA",
  },
  {
    month: "JUL",
    day: "24",
    year: "2026",
    name: "Rivanna Roots Concert Series",
    location: "Charlottesville, VA",
  },
  {
    month: "AUG",
    day: "28",
    year: "2026",
    name: "FunFest Fridays at Wheeling Park",
    location: "Wheeling, WV",
  },
  {
    month: "SEP",
    day: "19",
    year: "2026",
    name: "One World West Brewing",
    location: "Asheville, NC",
    time: "9:00 - 12:00",
    tickets: "$10 tickets",
  },
];

export default function UpcomingShows() {
  return (
    <section id="upcoming-shows" className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-[#346703] via-[#4a8a05] to-orange-500 bg-clip-text text-transparent tracking-tight leading-tight pb-2">
            Upcoming Shows
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#346703] to-orange-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shows.map((show) => (
            <div
              key={show.month + show.day}
              className="group relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 hover:border-orange-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1"
            >
              {/* Top gradient accent bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#346703] via-[#4a8a05] to-orange-500" />

              <div className="p-8">
                {/* Date badge */}
                <div className="mb-6">
                  <div className="bg-black rounded-2xl px-5 py-4 text-center inline-block min-w-[76px]">
                    <div className="text-orange-500 text-xs font-bold tracking-[0.25em] uppercase">
                      {show.month}
                    </div>
                    <div className="text-white text-5xl font-black leading-none mt-0.5">
                      {show.day}
                    </div>
                    <div className="text-gray-500 text-xs font-medium mt-1">
                      {show.year}
                    </div>
                  </div>
                </div>

                {/* Show name */}
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-200 leading-snug mb-3">
                  {show.name}
                </h3>

                {/* Location */}
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#4a8a05] flex-shrink-0" />
                  <span className="text-gray-400 text-base">{show.location}</span>
                </div>

                {/* Time */}
                {"time" in show && (
                  <div className="mt-2 text-gray-500 text-sm">{show.time}</div>
                )}

                {/* Tickets */}
                {"tickets" in show && (
                  <div className="mt-2 text-orange-400 text-sm font-medium">{show.tickets}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
