import mug from "@/assets/g-mug.jpg";
import bottle from "@/assets/g-bottle.jpg";
import keychain from "@/assets/g-keychain.jpg";
import pen from "@/assets/g-pen.jpg";
import award from "@/assets/g-award.jpg";
import tshirt from "@/assets/g-tshirt.jpg";
import mobile from "@/assets/g-mobile.jpg";
import corporate from "@/assets/g-corporate.jpg";
import laser from "@/assets/g-laser.jpg";

export type Product = {
  slug: string;
  name: string;
  desc: string;
  longDesc: string;
  img: string;
  priceFrom: number;
  priceTo: number;
  unit: string;
  features: string[];
  tags: string[];
};

export const products: Product[] = [
  {
    slug: "customized-mugs",
    name: "Customized Mugs",
    desc: "Ceramic, magic & enamel",
    longDesc:
      "Premium AAA ceramic, color-changing magic, and rugged enamel mugs printed in full-color sublimation. Perfect for gifts, offices, weddings and brand giveaways.",
    img: mug,
    priceFrom: 350,
    priceTo: 1200,
    unit: "per mug",
    features: ["Full-color sublimation", "Dishwasher safe", "Bulk discounts 50+", "48h turnaround"],
    tags: ["drinkware", "personal", "corporate"],
  },
  {
    slug: "water-bottles",
    name: "Water Bottles",
    desc: "Steel, sipper & sport",
    longDesc:
      "Stainless steel, BPA-free sipper and sports bottles laser-engraved or UV-printed with your logo, name or photo.",
    img: bottle,
    priceFrom: 650,
    priceTo: 2200,
    unit: "per bottle",
    features: ["Insulated steel options", "UV print or engraving", "Leak-proof lids", "Bulk pricing"],
    tags: ["drinkware", "sport", "corporate"],
  },
  {
    slug: "keychains",
    name: "Keychains",
    desc: "Metal, acrylic & wood",
    longDesc:
      "Custom-shaped keychains in brushed metal, crystal acrylic and natural wood — engraved or printed with your design.",
    img: keychain,
    priceFrom: 120,
    priceTo: 550,
    unit: "per piece",
    features: ["Laser engraved metal", "Photo printed acrylic", "Custom shapes", "MOQ 25"],
    tags: ["accessories", "giveaway"],
  },
  {
    slug: "pens",
    name: "Custom Pens",
    desc: "Engraved & branded",
    longDesc:
      "Executive metal and eco-friendly bamboo pens, laser-engraved with your logo or message. Ideal for events and corporate gifting.",
    img: pen,
    priceFrom: 180,
    priceTo: 950,
    unit: "per pen",
    features: ["Laser engraving", "Gift box optional", "Refillable ink", "Corporate bulk rates"],
    tags: ["stationery", "corporate"],
  },
  {
    slug: "award-shields",
    name: "Award Shields",
    desc: "Crystal, wood & acrylic",
    longDesc:
      "Stunning crystal, premium wood and modern acrylic awards engraved with sub-surface laser detail for that prestige finish.",
    img: award,
    priceFrom: 1800,
    priceTo: 9500,
    unit: "per award",
    features: ["3D crystal engraving", "Custom shapes", "Velvet gift box", "Logo + text"],
    tags: ["awards", "corporate", "events"],
  },
  {
    slug: "t-shirts",
    name: "T-Shirts",
    desc: "DTF, sublimation & embroidery",
    longDesc:
      "Soft-touch DTF prints, all-over sublimation and precision embroidery on premium cotton and dri-fit fabrics.",
    img: tshirt,
    priceFrom: 550,
    priceTo: 1850,
    unit: "per shirt",
    features: ["Wash-fast prints", "Custom sizes", "Team/group orders", "Embroidery available"],
    tags: ["apparel", "team", "events"],
  },
  {
    slug: "mobile-covers",
    name: "Mobile Covers",
    desc: "Hard & silicone prints",
    longDesc:
      "Edge-to-edge UV-printed mobile covers for all major models — hard polycarbonate and soft silicone, scratch-resistant finish.",
    img: mobile,
    priceFrom: 450,
    priceTo: 1200,
    unit: "per cover",
    features: ["All major models", "HD UV print", "Scratch resistant", "Photo or design"],
    tags: ["accessories", "personal"],
  },
  {
    slug: "corporate-gifts",
    name: "Corporate Gifts",
    desc: "Curated gift sets",
    longDesc:
      "Curated executive gift boxes — diary, pen, mug, bottle and accessories — packed and branded as a complete unboxing experience.",
    img: corporate,
    priceFrom: 2500,
    priceTo: 15000,
    unit: "per set",
    features: ["Curated bundles", "Custom packaging", "Brand inserts", "Pan-PK delivery"],
    tags: ["corporate", "gifting", "events"],
  },
  {
    slug: "laser-engraving",
    name: "Laser Engraving",
    desc: "Wood, metal & leather",
    longDesc:
      "Precision CO2 and fiber laser engraving on wood, steel, aluminum, leather and acrylic. Crisp details for plaques, signage and gifts.",
    img: laser,
    priceFrom: 500,
    priceTo: 8000,
    unit: "per item",
    features: ["CO2 + fiber laser", "Multi-material", "High-res detail", "Sample available"],
    tags: ["engraving", "corporate", "personal"],
  },
];

export const tagList = Array.from(new Set(products.flatMap((p) => p.tags))).sort();

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);
