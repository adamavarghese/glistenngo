export type BookingOption = {
  id: string;
  label: string;
  price: number;
};

export const bookingServices: BookingOption[] = [
  { id: "exterior", label: "Exterior Detail", price: 99.99 },
  { id: "interior", label: "Interior Detail", price: 149.99 },
  { id: "deluxe", label: "Glisten & Go Deluxe Package", price: 299.99 },
];

export const vehicleTypes: BookingOption[] = [
  { id: "sedan", label: "Sedan / Coupe", price: 0 },
  { id: "suv", label: "SUV (+$24.99)", price: 24.99 },
  { id: "truck", label: "Truck / 3rd Row SUV (+$49.99)", price: 49.99 },
];

export const bookingAddons: BookingOption[] = [
  { id: "paint-1", label: "Paint Correction (1-step)", price: 149.99 },
  { id: "paint-2", label: "Paint Correction (2-step)", price: 349.99 },
  { id: "paint-3", label: "Paint Correction (3-step)", price: 499.99 },
  { id: "engine-bay", label: "Engine Bay Cleaning", price: 29.99 },
  { id: "wax", label: "Wax", price: 79.99 },
  { id: "steam", label: "Steam Cleaning", price: 79.99 },
  { id: "ceramic", label: "Ceramic Coating", price: 199.99 },
];
