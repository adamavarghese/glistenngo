// Shared navigation, services, and add-on content for the site.
export const bookingUrl = "https://calendar.app.google/x7p3vgmQKYT9FKX88";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Add ons", href: "#addons" },
  { label: "Book", href: "#booking" },
  { label: "Brand vision", href: "#vision" },
  { label: "Instagram", href: "https://www.instagram.com/glisten.n.go/" },
  { label: "Contact", href: "#booking" },
];

export const services = [
  {
    title: "Exterior Detail",
    price: "$99.99",
    image: "/assets/service-exterior.jpeg",
    imageAlt: "Exterior detailing service",
    items: [
      "Dual Foam Bath",
      "Power/Hand Wash",
      "Tire Dressing",
      "Window Cleaning",
      "Rim & Tire Detailing",
    ],
    note: "$24.99 add on for SUV • $49.99 add on for Trucks/3rd Row SUV",
  },
  {
    title: "Interior Detail",
    price: "$149.99",
    image: "/assets/service-interior.jpeg",
    imageAlt: "Interior detailing service",
    items: [
      "Trash removal",
      "Vacuuming",
      "Deep cleaning",
      "Upholstery cleaning",
      "Floor & carpet cleaning",
      "Interior window cleaning",
    ],
    note: "$24.99 add on for SUV • $49.99 add on for Trucks/3rd Row SUV",
  },
  {
    title: "Glisten & Go Deluxe Package",
    price: "$299.99",
    popular: true,
    image: "/assets/service-deluxe.jpeg",
    imageAlt: "Glisten N' Go deluxe detailing package",
    imagePosition: "center 85%",
    items: [
      "Full Exterior Detail / Interior Detail",
      "Full vehicle wax — protects & gives your vehicle a nice shine",
    ],
    note: "$24.99 add on for SUV • $49.99 add on for Trucks/3rd Row SUV",
  },
];

export const addons = [
  {
    title: "Paint Correction",
    price: "$149.99 / $349.99 / $499.99",
    copy: "1-step, 2-step, or 3-step depending on severity. Cut + polish to bring your vehicle back to a showroom finish.",
  },
  {
    title: "Engine Bay Cleaning",
    price: "$29.99",
    copy: "Removes debris and restores the engine bay for a clean, factory-style look.",
  },
  {
    title: "Wax",
    price: "$79.99",
    copy: "Lasts up to 3 months. Adds UV protection, repels water, improves appearance, and helps keep the vehicle cleaner.",
  },
  {
    title: "Steam Cleaning",
    price: "$79.99",
    copy: "Steam clean necessary surfaces. Helps eliminate odor and can assist with extreme stains.",
  },
  {
    title: "Ceramic Coating",
    price: "$1,849.99",
    copy: "Professional-grade ceramic coating that bonds to your paint and creates a hard, hydrophobic layer. Repels water, dirt, and UV rays — keeping your car cleaner longer and protecting against oxidation and fading. Lasts up to 3 years.",
    fullWidth: true,
  },
];
