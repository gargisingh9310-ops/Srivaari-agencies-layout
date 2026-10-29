import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Factory, 
  Truck, 
  Droplets, 
  Wind, 
  ArrowRight,
  CheckCircle2,
  Briefcase
} from 'lucide-react';

const MAIN_SECTORS = [
  {
    id: "industrial-heating",
    title: "Industrial Heating",
    icon: Flame,
    tag: "Thermal Engineering",
    description: "Boiler installations, oil & gas combustion burners, thermic fluid heaters, and steam networks for process heat.",
    equipment: ["Steam Boilers", "Bentone & Riello Burners", "Leader IBR Valves"],
    link: "/products/burners"
  },
  {
    id: "road-construction",
    title: "Road Construction & Infrastructure",
    icon: Truck,
    tag: "Paving Technology",
    description: "High-wear mechanical and sensor paver replacement spares, bitumen sprayers, asphalt drum plant heating burners.",
    equipment: ["Paver Screed Plates", "Conveyor Chains & Augers", "Bitumen Pumps"],
    link: "/products/road-machinery"
  },
  {
    id: "manufacturing-processing",
    title: "Manufacturing & Processing",
    icon: Factory,
    tag: "Plant Machinery",
    description: "Auxiliary plant systems for textiles, chemical reactors, paper mills, rubber vulcanization, and agro-processing facilities.",
    equipment: ["Water Treatment Units", "Process Steam Accessories", "Flue Gas Blowers"],
    link: "/industries"
  },
  {
    id: "fluid-transfer",
    title: "Industrial Fluid Transfer",
    icon: Droplets,
    tag: "Heavy Fluid Movement",
    description: "Positive displacement gear pumps for viscous fuel, lube oils, jacketed bitumen pumping, and chemical feed dosing.",
    equipment: ["Rotofluid Gear Pumps", "FIG Pumps", "A1 Shakti Piston Pumps"],
    link: "/products/pumps"
  },
  {
    id: "pollution-control",
    title: "Environmental & Pollution Control",
    icon: Wind,
    tag: "Air Quality Systems",
    description: "Industrial particulate capture, pulse-jet bag filters, cyclone separators, and forced & induced draft fans.",
    equipment: ["Pulse Jet Bag Filters", "ID / FD Centrifugal Blowers", "Multi-Cyclone Dust Collectors"],
    link: "/products/pollution-control"
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white border-b border-[#E5EAF2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#123D8D]/10 text-[#123D8D] text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              Application Sectors
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-heading">
              Industries & Applications
            </h2>
            <p className="text-base text-[#64748B] mt-2 max-w-xl">
              Engineered equipment tailored to meet the operational demands of manufacturing, paving, and process installations.
            </p>
          </div>

          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#123D8D] hover:text-[#09275E] hover:underline"
          >
            <span>View All Industry Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MAIN_SECTORS.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={sector.id}
                className="group bg-[#F5F7FB] p-6 rounded-2xl border border-[#E5EAF2] hover:border-[#123D8D] card-shadow-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#123D8D] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-[#123D8D] bg-white px-2.5 py-1 rounded-full border border-[#E5EAF2]">
                      {sector.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#172033] group-hover:text-[#123D8D] transition-colors font-heading mb-2">
                    {sector.title}
                  </h3>

                  <p className="text-sm text-[#64748B] leading-relaxed mb-5">
                    {sector.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Equipment
                    </span>
                    {sector.equipment.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#123D8D] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={sector.link}
                  className="pt-4 border-t border-slate-200/80 inline-flex items-center justify-between text-xs font-bold text-[#123D8D] group-hover:text-[#F04438] transition-colors"
                >
                  <span>Explore Suitable Products</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}

          {/* Contact Support Card in 6th Slot */}
          <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-[#123D8D]/40 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F04438] bg-[#F04438]/10 px-2.5 py-1 rounded-full inline-block mb-3">
                Industry Assessment
              </span>
              <h3 className="text-xl font-bold text-[#172033] font-heading mb-2">
                Need Help Selecting Right Equipment?
              </h3>
              <p className="text-sm text-[#64748B] leading-relaxed mb-6">
                Our team provides technical guidance based on your plant capacity, fuel availability, and pressure requirements.
              </p>
            </div>

            <Link
              to="/enquiry"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#123D8D] hover:bg-[#09275E] text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Consult an Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
