export const CATEGORIES_DATA = [
  {
    id: "boilers",
    slug: "boilers",
    name: "Boilers & Boiler Spares",
    shortTitle: "Boilers & Spares",
    tagline: "Industrial Steam & Thermal Utilities",
    description: "Complete steam boiler systems, economisers, water treatment units, IBR certified valves and precision level mountings for safe plant operations.",
    image: "/assets/boiler.jpg",
    studioImage: "/assets/steam-boiler-studio.jpg",
    subcategories: [
      "Steam Boilers & Heaters",
      "Economisers",
      "Water Treatment Systems",
      "Boiler Mountings and Fittings",
      "IBR Valves & Steam Traps"
    ],
    highlight: "Comprehensive A-to-Z supply for industrial thermal utilities."
  },
  {
    id: "burners",
    slug: "burners",
    name: "Industrial Burners",
    shortTitle: "Industrial Burners",
    tagline: "Automatic & Manual Combustion Systems",
    description: "High-efficiency combustion burners for diesel, light oil, heavy oil, agro-waste and gas fuel, alongside genuine spares and servicing support.",
    image: "/assets/burners.jpg",
    studioImage: "/assets/industrial-burner-studio.jpg",
    subcategories: [
      "Fully Automatic Burners",
      "Manual Combustion Burners",
      "LDO Burners (External Gear Pump)",
      "Burner Spares & Components"
    ],
    highlight: "Sourced from Bentone, Riello, B.I. Make, National Furnaces, Continental and CKCO."
  },
  {
    id: "pumps",
    slug: "pumps",
    name: "Industrial Pumps",
    shortTitle: "Industrial Pumps",
    tagline: "Heavy-Duty Fluid Displacement",
    description: "Engineered positive displacement rotary gear pumps, internal FIG pumps, industrial piston pumps and jacketed bitumen pumps.",
    image: "/assets/industrial pump.png",
    studioImage: "/assets/rotary-gear-pump.jpg",
    subcategories: [
      "Rotary Gear Pumps",
      "FIG Internal Gear Pumps",
      "Industrial Piston Pumps",
      "Bitumen Pumps",
      "Boiler Feed & Dosing Pumps"
    ],
    highlight: "Supplied from Fluid Tech Systems (Roti Fluid), Shree Prakash Industries, A1 Shakti and KI Pump."
  },
  {
    id: "road-machinery",
    slug: "road-machinery",
    name: "Road Machinery",
    shortTitle: "Road Machinery",
    tagline: "Paving & Asphalt Plant Spares",
    description: "High-wear replacement components and mechanical spares for sensor pavers, mechanical pavers, screed plates, conveyor chains and bitumen spray distributors.",
    image: "/assets/road machinery.jpg",
    studioImage: "/assets/road-paver-screed.jpg",
    subcategories: [
      "Sensor & Mechanical Paver Spares",
      "Paver Screed Plates & Spares",
      "Conveyor Chains & Augers",
      "Bitumen Sprayer Spares"
    ],
    highlight: "Genuine high-wear resistant spares to minimize paving downtime."
  },
  {
    id: "pollution-control",
    slug: "pollution-control",
    name: "Pollution Control Equipment",
    shortTitle: "Pollution Control",
    tagline: "Industrial Air Quality & Filtration",
    description: "Industrial flue gas dust extractors, centrifugal forced & induced draft fans, pulse jet bag filters and high-efficiency cyclone separators.",
    image: "/assets/Pollution Control Equipments.png",
    studioImage: "/assets/dust-collector-studio.jpg",
    subcategories: [
      "Centrifugal Air Blowers (ID/FD Fans)",
      "Pulse Jet Bag Filters",
      "Cyclone Separators",
      "Multi-Cyclone Dust Collectors (MDC)"
    ],
    highlight: "Engineered to satisfy statutory environmental emission norms."
  }
];

export const PRODUCTS_DATA = [
  // BURNERS — AUTOMATIC
  {
    id: "bentone-burners",
    slug: "bentone-burners",
    name: "Fully Automatic Burners — Bentone",
    category: "burners",
    subCategory: "Fully Automatic Burners",
    brand: "Bentone",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/industrial-burner-studio.jpg",
    shortDesc: "Swedish-engineered automatic mono-block diesel, gas, and bio-fuel burners for superior combustion efficiency.",
    overview: "Bentone burners are recognized worldwide for compact monoblock construction, low emissions, high operational reliability and easy accessibility for servicing. Suitable for boilers, drying ovens and hot water generators.",
    features: [
      "Compact mono-block housing with integrated combustion fan",
      "Low sound level operation with precision acoustic damping",
      "Compatible with light oil, diesel, LPG, and natural gas",
      "Integrated electronic control box with photocell flame monitoring",
      "Designed for quick installation and simple plug-in electrical connections"
    ],
    specs: [
      { label: "Operation Mode", value: "Single-stage / Two-stage / Modulating" },
      { label: "Fuel Compatibility", value: "Diesel, Light Distillate Oil (LDO), Natural Gas, LPG" },
      { label: "Control System", value: "Microprocessor-based automatic sequence controller" },
      { label: "Manufacturer", value: "Bentone (Sweden)" }
    ],
    applications: ["Process Steam Boilers", "Hot Air Generators", "Thermic Fluid Heaters", "Baking & Curing Ovens"]
  },
  {
    id: "riello-burners",
    slug: "riello-burners",
    name: "Fully Automatic Burners — Riello",
    category: "burners",
    subCategory: "Fully Automatic Burners",
    brand: "Riello",
    image: "/assets/industrial-burner-studio.jpg",
    secondaryImage: "/assets/burners.jpg",
    shortDesc: "Italian industrial combustion burners engineered for light oil, heavy oil and dual-fuel applications.",
    overview: "Riello's world-leading burner technology delivers high aerodynamic air flow, excellent flame stabilization, and fuel economy. Configurable across single-stage, two-stage and progressive modulating variants.",
    features: [
      "Robust die-cast aluminium casing designed for industrial durability",
      "Patented combustion head designed for complete fuel atomization",
      "Adjustable air damper with clear calibration indicators",
      "High-pressure gear pump with pressure regulator and shut-off valve",
      "Minimal maintenance requirements with easily accessible nozzle assembly"
    ],
    specs: [
      { label: "Combustion Type", value: "Pressure atomizing automatic burner" },
      { label: "Fuel Versatility", value: "Light Oil, HSD, Heavy Fuel, Dual Fuel (Oil/Gas)" },
      { label: "Firing Regulation", value: "1-Stage, 2-Stage, or Modulating with Servomotor" },
      { label: "Standard Conformity", value: "EN 267 / ISO compliant industrial grade" }
    ],
    applications: ["Industrial Steam Boilers", "Road Plant Asphalt Dryers", "District Heating", "Textile Dyeing Utilities"]
  },
  {
    id: "burner-india-burners",
    slug: "burner-india-burners",
    name: "Fully Automatic Burners — B.I. Make",
    category: "burners",
    subCategory: "Fully Automatic Burners",
    brand: "Burner India (B.I. Make)",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/industrial-burner-studio.jpg",
    shortDesc: "Proven Indian industrial combustion units engineered for heavy process heating and asphalt drying.",
    overview: "Manufactured for rugged Indian operating conditions, B.I. Make Burners provide high thermal efficiency with economical maintenance and readily available replacement parts across process plants.",
    features: [
      "Sturdy heavy-gauge steel construction built for continuous duty",
      "Optimized flame pattern for direct shell and fire-tube heating",
      "Standardised mountings for swift retrofitting into existing plants",
      "High atomizing efficiency reducing unburnt carbon emissions"
    ],
    specs: [
      { label: "Construction", value: "Heavy-duty fabricated industrial steel" },
      { label: "Fuel Type", value: "Furnace Oil (FO), LDO, HSD" },
      { label: "Spares Availability", value: "100% genuine domestic spares in stock" }
    ],
    applications: ["Asphalt Drum Mix Plants", "Rolling Mills", "Rotary Dryers", "Industrial Furnaces"]
  },

  // BURNERS — MANUAL & SPECIAL
  {
    id: "national-furnaces-burners",
    slug: "national-furnaces-burners",
    name: "Manual Combustion Burners — National Furnaces",
    category: "burners",
    subCategory: "Manual Combustion Burners",
    brand: "National Furnaces",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/industrial-burner-studio.jpg",
    shortDesc: "High-temperature manual combustion burners engineered for heavy forging, metal treatment and kiln heating.",
    overview: "National Furnaces manual burners offer direct operator control over oil-to-air ratios, making them the preferred choice for industrial kilns, foundry cupolas and heavy heat-treatment operations.",
    features: [
      "Manual needle valve precision fuel metering",
      "Heavy cast iron blast tube resisting extreme back-radiation",
      "Flexible atomizing medium using compressed air or medium blower pressure",
      "Simple design with zero sensitive electronics for harsh environments"
    ],
    specs: [
      { label: "Control", value: "Manual dual-lever air/fuel adjustment" },
      { label: "Atomizing Medium", value: "Low/Medium Pressure Air or Steam" },
      { label: "Fuel Suitability", value: "Furnace Oil, LDO, Waste Oil, Biodiesel" }
    ],
    applications: ["Heat Treatment Furnaces", "Foundry Crucibles", "Forging Furnaces", "Refractory Kilns"]
  },
  {
    id: "continental-burners",
    slug: "continental-burners",
    name: "Manual Combustion Burners — Continental",
    category: "burners",
    subCategory: "Manual Combustion Burners",
    brand: "Continental Burners",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/industrial-burner-studio.jpg",
    shortDesc: "Precision manual burners for industrial boilers, asphalt kettles and bitumen heating installations.",
    overview: "Continental combustion burners provide stable flame geometry, high turndown ratios and easy operation across tar boilers, road construction sprayers and process heating tanks.",
    features: [
      "Precision-machined atomizing nozzle tip",
      "Rugged swivel mounting for easy inspection and cleaning",
      "Tolerant to varying oil viscosities with preheated fuel lines",
      "Long service lifespan under continuous operating cycles"
    ],
    specs: [
      { label: "Type", value: "Industrial Manual Combustion Burner" },
      { label: "Mounting", value: "Flanged / Swivel bracket mounting" },
      { label: "Adjustment", value: "Micrometric oil regulation valve" }
    ],
    applications: ["Bitumen Tankers", "Tar Kettles", "Small Steam Boilers", "Process Liquid Heaters"]
  },
  {
    id: "ckco-burners-product",
    slug: "ckco-burners-product",
    name: "Manual Combustion Burners — CKCO",
    category: "burners",
    subCategory: "Manual Combustion Burners",
    brand: "CKCO Burners",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/industrial-burner-studio.jpg",
    shortDesc: "Reliable manual and semi-automatic industrial combustion burners for boilers and plant furnaces.",
    overview: "CKCO burners deliver steady thermal outputs, low maintenance costs and straightforward operational controls suitable for factories requiring durable combustion performance.",
    features: [
      "Durable nozzle tips resistant to thermal erosion",
      "Easily configurable with external fuel pressurising gear pumps",
      "Compatible with gravity-fed and pressurized fuel loops"
    ],
    specs: [
      { label: "Fuel Support", value: "Diesel, LDO, Heavy Fuels" },
      { label: "Burner Class", value: "Industrial Manual / Semi-Auto" }
    ],
    applications: ["Chemical Reaction Vessels", "Textile Stenters", "Bitumen Sprayers"]
  },
  {
    id: "ldo-burners-gear-pump",
    slug: "ldo-burners-gear-pump",
    name: "LDO Burners — External Gear Pump Configuration",
    category: "burners",
    subCategory: "LDO Burners (External Gear Pump)",
    brand: "LDO Burners — External Gear Pump",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/rotary-gear-pump.jpg",
    shortDesc: "Specialized Light Distillate Oil burner systems configured with dedicated external positive displacement gear pumps.",
    overview: "Designed for applications where standard internal burner pumps cannot handle fuel viscosity or high suction lifts. Srivaari Agencies supplies complete packages pairing the burner with external gear pumps and pulsation dampers.",
    features: [
      "External rotary gear pump providing continuous, pulse-free fuel feed",
      "Eliminates suction cavitation when fuel storage tanks are situated at distance",
      "Incorporates inline suction strainers and precision pressure bypass valves",
      "Custom assembled with verified motor, coupling and base frame"
    ],
    specs: [
      { label: "Pump Configuration", value: "External rotary gear pump (Foot/Flange mounted)" },
      { label: "Fuel Grade", value: "LDO (Light Distillate Oil) & Diesel" },
      { label: "Pressure Range", value: "Adjustable 10 to 25 bar fuel delivery" }
    ],
    applications: ["Road Asphalt Mixing Plants", "Long-Run Plant Boilers", "Agricultural Parboiling Units"]
  },
  {
    id: "burner-spares-servicing",
    slug: "burner-spares-servicing",
    name: "Burner Spares & Components",
    category: "burners",
    subCategory: "Burner Spares & Components",
    brand: "Danfoss",
    image: "/assets/burners.jpg",
    secondaryImage: "/assets/industrial-burner-studio.jpg",
    shortDesc: "Genuine replacement burner nozzles, fuel pumps, ignition transformers, flame sensors and expert tuning.",
    overview: "To guarantee peak combustion efficiency and prevent hazardous flame outages, Srivaari Agencies maintains an extensive stock of authentic burner spares and provides technical guidance for field servicing.",
    features: [
      "Danfoss precision brass & stainless steel oil nozzles in varied spray angles",
      "Suntec gear pumps with built-in cut-off solenoids",
      "Fida high-voltage ignition transformers and high-temperature ignition cables",
      "Photocell sensors, sequence controllers and flame detectors"
    ],
    specs: [
      { label: "Nozzle Types", value: "Solid (S), Hollow (H), Universal (B) patterns" },
      { label: "Transformers", value: "Electronic & conventional magnetic 8kV to 15kV" },
      { label: "Pumps", value: "Suntec AL, AN, AS, E47, J series" }
    ],
    applications: ["All Light Oil, Heavy Oil & Gas Burners", "Seasonal Plant Overhauls"]
  },

  // INDUSTRIAL PUMPS
  {
    id: "rotofluid-gear-pumps",
    slug: "rotofluid-gear-pumps",
    name: "Gear Pumps — Fluid Tech Systems / Roti Fluid",
    category: "pumps",
    subCategory: "Rotary Gear Pumps",
    brand: "Rotofluid (Fluid Tech)",
    image: "/assets/rotary-gear-pump.jpg",
    secondaryImage: "/assets/industrial pump.png",
    shortDesc: "India's premier positive displacement rotary gear pumps for transfer of viscous, clean industrial fluids.",
    overview: "Rotofluid (Roti Fluid) gear pumps feature precision-hobbed herringbone or spur gears, delivering pulsation-free fluid transfer with high volumetric efficiency across lubricating oils, bitumen, fuel oils and syrups.",
    features: [
      "Positive displacement mechanism ensuring uniform discharge regardless of pressure",
      "Precision gear teeth profiles reducing friction, heat build-up and decibel levels",
      "Integrated pressure relief valve safeguarding pump and pipeline from overpressure",
      "Available with mechanical seal or Teflon/graphite gland packing"
    ],
    specs: [
      { label: "Type", value: "External Rotary Twin Gear Pump" },
      { label: "Viscosity Range", value: "Up to 50,000 cSt viscous media" },
      { label: "Mounting", value: "Foot mounted / Flange mounted for direct motor coupling" },
      { label: "Casing Material", value: "Graded Cast Iron / Cast Steel / Stainless Steel" }
    ],
    applications: ["Fuel Oil Transfer to Burners", "Lube Oil Circulation", "Bitumen Heating Systems", "Edible & Industrial Oils"]
  },
  {
    id: "fig-pumps-prakash",
    slug: "fig-pumps-prakash",
    name: "FIG Pumps — Fluid Tech Systems / Shree Prakash Industries",
    category: "pumps",
    subCategory: "FIG Internal Gear Pumps",
    brand: "Shree Prakash Industries",
    image: "/assets/industrial pump.png",
    secondaryImage: "/assets/rotary-gear-pump.jpg",
    shortDesc: "High-precision FIG internal gear pumps engineered for highly viscous, temperature-sensitive industrial liquids.",
    overview: "FIG pumps utilize internal gear crescent technology to deliver smooth, gentle pumping action with low shear. Sourced from proven manufacturers like Fluid Tech Systems and Shree Prakash Industries.",
    features: [
      "Internal gear design capable of handling high viscosities without media degradation",
      "Only two moving parts ensuring exceptional operational reliability",
      "Reversible flow capability by reversing drive motor rotation",
      "Optional steam/hot water jacketing for heating cold solidified liquids"
    ],
    specs: [
      { label: "Mechanism", value: "Gear-within-a-gear positive displacement with crescent" },
      { label: "Jacketing Option", value: "Full body jacket for steam/thermic fluid heating" },
      { label: "Sealing", value: "Gland packed or heavy-duty cartridge mechanical seal" }
    ],
    applications: ["Bitumen & Asphalt Plants", "Molasses & Sugar Syrups", "Paint & Resins", "Soap & Detergent Slurries"]
  },
  {
    id: "a1-shakti-piston-pumps",
    slug: "a1-shakti-piston-pumps",
    name: "Piston Pumps — A1 Shakti Pump",
    category: "pumps",
    subCategory: "Industrial Piston Pumps",
    brand: "A1 Shakti",
    image: "/assets/industrial pump.png",
    secondaryImage: "/assets/rotary-gear-pump.jpg",
    shortDesc: "High-pressure positive displacement piston pumps built for extreme pressure cleaning and fluid transfer.",
    overview: "Engineered by A1 Shakti, these industrial piston pumps deliver powerful high-pressure output for boiler hydro-testing, vessel washing, reverse osmosis pressurisation and road machinery spraying.",
    features: [
      "Heavy-duty forged brass/cast iron manifold designed for rigorous hydraulic loads",
      "Ceramic-coated solid plungers ensuring long seal life and wear resistance",
      "Stainless steel suction and discharge check valves",
      "Oil-bath lubricated crankcase with oversized roller bearings"
    ],
    specs: [
      { label: "Pump Type", value: "Reciprocating Triplex / Duplex Plunger Piston Pump" },
      { label: "Pressure Class", value: "High-pressure industrial rating" },
      { label: "Drive Compatibility", value: "Electric motor or diesel engine belt driven" }
    ],
    applications: ["Boiler Pressure Testing", "Industrial Equipment Cleaning", "Agricultural Spraying", "High-Pressure Washing"]
  },
  {
    id: "bitumen-gear-pumps-ki",
    slug: "bitumen-gear-pumps-ki",
    name: "Bitumen Pumps — KI Pump",
    category: "pumps",
    subCategory: "Bitumen Pumps",
    brand: "KI Pump",
    image: "/assets/rotary-gear-pump.jpg",
    secondaryImage: "/assets/industrial pump.png",
    shortDesc: "Heavy-duty jacketed bitumen and asphalt pumps designed to withstand extreme temperatures and abrasive fillers.",
    overview: "Bitumen transfer requires specialised pumps capable of withstanding operating temperatures up to 250°C without binding. KI Bitumen Pumps incorporate thermal clearances and steam jacketing to prevent premature solidification.",
    features: [
      "Full steam or thermic oil heating jacket encompassing casing and cover",
      "Expanded internal running clearances accommodating thermal expansion",
      "Hardened steel gears and high-temperature gland packing",
      "High suction capability for rapid unloading of asphalt road tankers"
    ],
    specs: [
      { label: "Operating Temperature", value: "Up to 250°C continuous duty" },
      { label: "Heating Jacket", value: "Integral jacket tested to 10 kg/cm² pressure" },
      { label: "Duty Cycle", value: "Continuous industrial heavy-duty" }
    ],
    applications: ["Asphalt Drum Mixing Plants", "Bitumen Decanting Units", "Road Construction Pavers", "Tar Storage Terminals"]
  },
  {
    id: "mass-hydraulic-gear-pumps",
    slug: "mass-hydraulic-gear-pumps",
    name: "Mass Hydraulic Gear Pumps",
    category: "pumps",
    subCategory: "Hydraulic Gear Pumps",
    brand: "Mass Hydraulic Pumps",
    image: "/assets/industrial pump.png",
    secondaryImage: "/assets/rotary-gear-pump.jpg",
    shortDesc: "Precision external hydraulic gear pumps for machinery power packs, hydraulic presses and material lifters.",
    overview: "Manufactured for hydraulic oil power transmission, Mass Hydraulic Pumps feature precision-ground gear profiles and high-grade aluminium or cast iron bodies ensuring minimal leakage and high volumetric efficiency.",
    features: [
      "High working pressure capacity with low acoustic signature",
      "Pressure-balanced thrust plates maximizing mechanical efficiency",
      "Standard SAE / ISO mounting flanges for versatile mechanical integration"
    ],
    specs: [
      { label: "Fluid Type", value: "Mineral hydraulic oil (anti-wear grades)" },
      { label: "Pressure Rating", value: "Up to 210 bar industrial hydraulic rating" }
    ],
    applications: ["Industrial Hydraulic Power Packs", "Press Machinery", "Road Machinery Hydraulics"]
  },
  {
    id: "boiler-feed-pump-multistage",
    slug: "boiler-feed-pump-multistage",
    name: "Multistage Boiler Feed Pumps",
    category: "pumps",
    subCategory: "Boiler Feed & Dosing Pumps",
    brand: "Malhar Pumps",
    image: "/assets/rotary-gear-pump.jpg",
    secondaryImage: "/assets/industrial pump.png",
    shortDesc: "High-pressure centrifugal multistage pumps providing continuous deaerated water to steam boilers.",
    overview: "Boiler feed pumps must generate head exceeding the internal steam pressure of the boiler while resisting hot condensate cavitation. Srivaari Agencies supplies reliable vertical and horizontal multistage feed units.",
    features: [
      "Multistage impeller design delivering high pressures at smooth continuous flow",
      "Stainless steel impellers and intermediate chambers resisting thermal corrosion",
      "High-temperature mechanical seal suited for hot boiler feedwater"
    ],
    specs: [
      { label: "Configuration", value: "Vertical / Horizontal Inline Multistage" },
      { label: "Media Temperature", value: "Up to 120°C feedwater rating" }
    ],
    applications: ["Steam Boiler Feedwater Injection", "Condensate Recovery Loops", "Booster Systems"]
  },

  // BOILERS & BOILER SPARES
  {
    id: "steam-boilers-thermic-heaters",
    slug: "steam-boilers-thermic-heaters",
    name: "Industrial Boilers & Thermic Fluid Heaters",
    category: "boilers",
    subCategory: "Steam Boilers & Heaters",
    brand: "Leader Valves",
    image: "/assets/steam-boiler-studio.jpg",
    secondaryImage: "/assets/boiler.jpg",
    shortDesc: "Industrial steam boilers, thermic fluid oil heaters, hot air generators and hot water systems.",
    overview: "Srivaari Agencies brings over 25 years of technical expertise in sourcing and supplying industrial boilers across varied fuel configurations including diesel, light oil, agro-waste briquettes and coal.",
    features: [
      "Available across packaged smoke-tube and water-tube configurations",
      "Equipped with multi-pass flue circuits maximizing heat transfer area",
      "Built in full compliance with Indian Boiler Regulations (IBR) standards",
      "Integrates automated feed water level controllers and low-water safety trips"
    ],
    specs: [
      { label: "Fuel Flexibility", value: "Diesel, Furnace Oil, Gas, Briquettes, Biomass Agro-Waste" },
      { label: "Compliance", value: "IBR / Non-IBR certified models as per application scale" },
      { label: "Thermal Systems", value: "Steam Boilers, Thermic Fluid Heaters, Hot Air Generators" }
    ],
    applications: ["Textile Dyeing & Processing", "Pharmaceutical Autoclaves", "Food & Dairy Pasteurization", "Rice Parboiling Mills"]
  },
  {
    id: "boiler-economisers",
    slug: "boiler-economisers",
    name: "Boiler Economisers & Heat Recovery",
    category: "boilers",
    subCategory: "Economisers",
    brand: "Leader Valves",
    image: "/assets/boiler.jpg",
    secondaryImage: "/assets/steam-boiler-studio.jpg",
    shortDesc: "Flue gas waste heat recovery units that preheat boiler feedwater to slash plant fuel consumption by 5% to 15%.",
    overview: "Recovering sensible heat from boiler chimney exhaust significantly improves thermal efficiency. Economisers capture outgoing flue heat and preheat boiler feed water before entry, saving substantial daily fuel expenditure.",
    features: [
      "Heavy-gauge seamless steel tubes designed to withstand flue gas abrasion",
      "Finned or bare tube configurations optimized for clean gas or solid fuel smoke",
      "Integral soot blowing access doors for easy preventative maintenance",
      "Substantially lowers chimney exhaust temperatures while conserving thermal energy"
    ],
    specs: [
      { label: "Energy Savings", value: "Typically 5% to 15% reduction in fuel consumption" },
      { label: "Tube Material", value: "IBR certified seamless heavy-wall steel" },
      { label: "Configuration", value: "In-line vertical or horizontal gas flow" }
    ],
    applications: ["Process Steam Boilers", "Captive Power Plant Boilers", "Waste Heat Recovery Systems"]
  },
  {
    id: "water-treatment-systems",
    slug: "water-treatment-systems",
    name: "Industrial Water Treatment Systems",
    category: "boilers",
    subCategory: "Water Treatment Systems",
    brand: "CompAir Precision",
    image: "/assets/boiler.jpg",
    secondaryImage: "/assets/steam-boiler-studio.jpg",
    shortDesc: "Commercial water softeners, DM (Demineralisation) plants and Reverse Osmosis (RO) systems for scale-free boiler operation.",
    overview: "Untreated raw water causes scale build-up inside boiler tubes, leading to catastrophic thermal resistance and tube rupture. Srivaari Agencies provides engineered softening and demineralization systems.",
    features: [
      "High-exchange capacity cation and anion ion-exchange resin columns",
      "Multi-port manual and automatic multiport control valves for effortless regeneration",
      "Durable FRP (Fiber Reinforced Plastic) and mild steel rubber-lined pressure vessels",
      "Complete system includes brine tank, salt saturation grid and testing reagents"
    ],
    specs: [
      { label: "Technologies", value: "Industrial Softener, Two-Bed DM Plant, Mixed Bed, Industrial RO" },
      { label: "Feedwater Quality", value: "Zero-hardness boiler feed compliance" }
    ],
    applications: ["Steam Boiler Feed Preparation", "Cooling Towers", "Pharmaceutical Pure Water", "Textile Wet Processing"]
  },
  {
    id: "boiler-mountings-fittings",
    slug: "boiler-mountings-fittings",
    name: "Boiler Mountings & Fittings",
    category: "boilers",
    subCategory: "Boiler Mountings and Fittings",
    brand: "Leader Valves",
    image: "/assets/boiler.jpg",
    secondaryImage: "/assets/steam-boiler-studio.jpg",
    shortDesc: "IBR certified reflex water level gauge glass assemblies, Mobrey level controllers, safety valves and pressure gauges.",
    overview: "Safety in pressurized boiler rooms depends upon high-integrity mountings. We supply genuine transparent and reflex gauge glasses, fusible safety plugs, spring-loaded safety valves and Mobrey liquid level controllers.",
    features: [
      "IBR certified bronze and cast steel water level indicator cock sets",
      "High-pressure borosilicate reflex and transparent gauge glass strips",
      "Dual-control Mobrey magnetic float switches for automatic pump start/stop and alarm",
      "Heavy-duty Bourdon tube pressure gauges with siphon tubes and test cocks"
    ],
    specs: [
      { label: "Certification", value: "IBR Form III-C test certificates provided" },
      { label: "Pressure Class", value: "10.54 kg/cm² up to 40 kg/cm² steam duty" }
    ],
    applications: ["Steam Boilers", "Condensate Receivers", "Pressurised Deaerators", "Expansion Tanks"]
  },
  {
    id: "industrial-steam-valves",
    slug: "industrial-steam-valves",
    name: "Industrial Valves & Steam Traps",
    category: "boilers",
    subCategory: "IBR Valves & Steam Traps",
    brand: "Leader Valves",
    image: "/assets/steam-boiler-studio.jpg",
    secondaryImage: "/assets/boiler.jpg",
    shortDesc: "IBR steam stop valves, forged steel globe valves, blowdown valves and thermodynamic steam traps.",
    overview: "Steam control demands zero-leakage shut-off and rapid removal of condensate. Srivaari Agencies stocks Leader valves, piston valves, rack & pinion blowdown valves and thermodynamic steam traps.",
    features: [
      "Full bore cast steel and forged steel construction for high thermal resistance",
      "Stellite / hardened stainless steel trim resisting steam wire-drawing",
      "Thermodynamic traps with built-in stainless steel disc and strainer screens",
      "Quick-opening blowdown valves for sludge expulsion"
    ],
    specs: [
      { label: "Valve Types", value: "Globe, Gate, Check, Blowdown, Safety Relief" },
      { label: "Traps", value: "Thermodynamic, Inverted Bucket, Ball Float steam traps" },
      { label: "IBR Approval", value: "100% genuine IBR stamped valves" }
    ],
    applications: ["Steam Distribution Headers", "Condensate Lines", "Process Equipment Isolation", "Boiler Blowdown"]
  },

  // ROAD MACHINERY
  {
    id: "road-paver-spares",
    slug: "road-paver-spares",
    name: "Pavers & Genuine Paver Spares",
    category: "road-machinery",
    subCategory: "Sensor & Mechanical Paver Spares",
    brand: "Apollo",
    image: "/assets/road-paver-screed.jpg",
    secondaryImage: "/assets/road machinery.jpg",
    shortDesc: "High-grade mechanical and sensor paver replacement spares, screed plates, conveyor chains and augers.",
    overview: "Asphalt paving operates under relentless abrasion and extreme heat. Srivaari Agencies delivers genuine, high-wear resistant spares for Apollo and other major road pavers at competitive rates.",
    features: [
      "Hardox and abrasion-resistant steel screed bottom plates",
      "High-tensile material conveyor drive chains, flight bars and matching sprockets",
      "Cast alloy auger blades and segmented feed screws",
      "Heating elements, burner jets and ignition spares for screed heating systems"
    ],
    specs: [
      { label: "Equipment Compatibility", value: "Sensor Pavers, Mechanical Pavers, Asphalt Finishers" },
      { label: "Wear Parts", value: "Screed plates, tamper bars, conveyor chains, augers" },
      { label: "Pricing", value: "Direct B2B supply at reasonable wholesale prices" }
    ],
    applications: ["Highway Paving Operations", "Asphalt Road Surfacing", "City Infrastructure Projects"]
  },
  {
    id: "asphalt-plant-spares",
    slug: "asphalt-plant-spares",
    name: "Asphalt Plant & Sprayer Spares",
    category: "road-machinery",
    subCategory: "Bitumen Sprayer Spares",
    brand: "Apollo",
    image: "/assets/road machinery.jpg",
    secondaryImage: "/assets/road-paver-screed.jpg",
    shortDesc: "Bitumen spray bars, burner nozzles, asphalt drum mix spares and positive displacement pump components.",
    overview: "Keep asphalt drum mix plants and mobile bitumen sprayers operating at peak throughput with our durable spares including rotary dryer burner parts, bitumen transfer lines and hydraulic motor couplers.",
    features: [
      "Precision brass and steel bitumen spray nozzles delivering uniform tack coat",
      "Heavy-duty heating burners for bitumen pressure distributors",
      "Rotary dryer flight plates and high-temperature trunnion rollers"
    ],
    specs: [
      { label: "Suitability", value: "Drum Mix Asphalt Plants, Bitumen Sprayers, Chip Spreaders" }
    ],
    applications: ["Asphalt Batching Plants", "Bitumen Spraying Trucks", "Road Maintenance Contractors"]
  },

  // POLLUTION CONTROL EQUIPMENT
  {
    id: "centrifugal-air-blowers",
    slug: "centrifugal-air-blowers",
    name: "Industrial Centrifugal Air Blowers",
    category: "pollution-control",
    subCategory: "Centrifugal Air Blowers",
    brand: "CompAir Precision",
    image: "/assets/Pollution Control Equipments.png",
    secondaryImage: "/assets/dust-collector-studio.jpg",
    shortDesc: "High-pressure Induced Draft (ID) and Forced Draft (FD) fans engineered for boiler combustion and flue gas exhaust.",
    overview: "Centrifugal air blowers provide the controlled air flow necessary for solid-fuel boiler combustion and exhaust gas extraction through pollution control systems. Dynamically balanced impellers ensure minimal vibration.",
    features: [
      "Heavy-gauge steel casing with aerodynamically streamlined inlet cone",
      "Statically and dynamically balanced impellers preventing bearing failure",
      "Available in direct motor driven, belt driven and fluid coupling configurations",
      "Water-cooled bearing blocks for high-temperature flue gas duty"
    ],
    specs: [
      { label: "Fan Types", value: "Induced Draft (ID), Forced Draft (FD), Primary Air (PA) Blowers" },
      { label: "Blade Profiles", value: "Backward Curved, Backward Inclined, Radial Tip" },
      { label: "Temperature Rating", value: "Up to 300°C flue gas handling" }
    ],
    applications: ["Boiler Flue Gas Evacuation", "Furnace Combustion Air", "Bag Filter Suction Systems", "Pneumatic Conveying"]
  },
  {
    id: "pulse-jet-bag-filters",
    slug: "pulse-jet-bag-filters",
    name: "Pulse Jet Bag Filters",
    category: "pollution-control",
    subCategory: "Pulse Jet Bag Filters",
    brand: "CompAir Precision",
    image: "/assets/dust-collector-studio.jpg",
    secondaryImage: "/assets/Pollution Control Equipments.png",
    shortDesc: "Continuous on-line dust filtration systems delivering emission levels below statutory environmental norms.",
    overview: "Pulse Jet Bag Filters use high-pressure compressed air pulses to clean filter bags while remaining in continuous operation. Highly effective for capturing fine particulates from boiler flue gas and chemical processing.",
    features: [
      "Robust carbon steel plenum chamber with modular hopper configuration",
      "Electronic sequential pulse timer regulating high-speed solenoid valves",
      "High-temperature needle felt filter bags (Non-woven polyester, Nomex, Ryton)",
      "High collection efficiency capturing sub-micron dust particles"
    ],
    specs: [
      { label: "Cleaning Mechanism", value: "Automatic compressed air pulse jet" },
      { label: "Emission Standard", value: "Engineered to meet statutory pollution control board norms" },
      { label: "Bag Media", value: "Polyester, PPS, Polypropylene, Aramid (Nomex)" }
    ],
    applications: ["Boiler Flue Gas Treatment", "Cement & Fly Ash Handling", "Chemical Powder Processing", "Rice Mill Dust Extraction"]
  },
  {
    id: "cyclone-dust-separators-mdc",
    slug: "cyclone-dust-separators-mdc",
    name: "Cyclone Separators & Multi-Cyclone Collectors (MDC)",
    category: "pollution-control",
    subCategory: "Multi-Cyclone Dust Collectors (MDC)",
    brand: "CompAir Precision",
    image: "/assets/dust-collector-studio.jpg",
    secondaryImage: "/assets/Pollution Control Equipments.png",
    shortDesc: "Mechanical centrifugal dust separators designed for primary grit arrest and coarse particulate recovery.",
    overview: "Multi-cyclone dust collectors (MDCs) utilize high-velocity cyclonic vortex action to separate coarse fly ash and particulate matter before the flue gas enters bag filters or ID fans, extending bag lifespan.",
    features: [
      "Wear-resistant cast iron / alloy cyclone cones minimizing abrasive erosion",
      "Zero moving parts inside the gas stream ensuring minimal operational failure",
      "Rotary airlock valve at hopper bottom for continuous dust evacuation without air ingress",
      "Protects downstream ID blowers from abrasive particle impingement"
    ],
    specs: [
      { label: "Collector Type", value: "Single Cyclone / Multi-Cyclone (MDC) Cluster" },
      { label: "Cone Material", value: "Chilled Cast Iron / Graded Ni-Hard / Cast Alloy" },
      { label: "Pressure Drop", value: "Low resistance design minimizing fan power consumption" }
    ],
    applications: ["Solid Fuel & Husk Boilers", "Foundry Sand Systems", "Wood Working Exhaust", "Grain Processing Plants"]
  }
];
