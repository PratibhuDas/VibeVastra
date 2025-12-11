// src/data/products.js
import leatherImg from "../assets/leather_jacket.png";
import premiumImg from "../assets/premium_jacket.png";

const products = [
  {
    id: 1,
    title: "Premium Leather Biker",
    price: 199.99,
    category: "Jackets",
    subCategory: "Leather",
    description: "Authentic premium leather biker jacket.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", hex: "#000000", image: leatherImg },
      { name: "Brown", hex: "#8b4513", image: leatherImg }
    ],
    image: leatherImg
  },
  {
    id: 2,
    title: "Classic Denim Jacket",
    price: 89.99,
    category: "Jackets",
    subCategory: "Premium",
    description: "Timeless denim jacket for everyday wear.",
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Indigo", hex: "#26418f", image: premiumImg },
      { name: "Light Blue", hex: "#93c5fd", image: premiumImg }
    ],
    image: premiumImg
  },
  {
    id: 3,
    title: "Suede Bomber",
    price: 149.99,
    category: "Jackets",
    subCategory: "Premium",
    description: "Luxury suede bomber jacket with ribbed cuffs.",
    sizes: ["M", "L", "XL"],
    colors: [
      { name: "Tan", hex: "#d2b48c", image: premiumImg },
      { name: "Olive", hex: "#556b2f", image: premiumImg }
    ],
    image: premiumImg
  },
  {
    id: 4,
    title: "Vintage Racer",
    price: 229.99,
    category: "Jackets",
    subCategory: "Leather",
    description: "Vintage inspired racer leather jacket.",
    sizes: ["S", "M", "L"],
    colors: [
      { name: "Cognac", hex: "#9a463d", image: leatherImg }
    ],
    image: leatherImg
  },
  {
    id: 5,
    title: "Quilted Puffer",
    price: 129.99,
    category: "Jackets",
    subCategory: "Premium",
    description: "High-warmth quilted puffer for colder days.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Navy", hex: "#000080", image: premiumImg },
      { name: "Black", hex: "#000000", image: premiumImg }
    ],
    image: premiumImg
  },
  {
    id: 6,
    title: "Cropped Moto",
    price: 179.99,
    category: "Jackets",
    subCategory: "Leather",
    description: "Stylish cropped leather moto jacket.",
    sizes: ["XS", "S", "M"],
    colors: [
      { name: "Black", hex: "#000000", image: leatherImg },
      { name: "Red", hex: "#cc0000", image: leatherImg }
    ],
    image: leatherImg
  }
];

export default products;
