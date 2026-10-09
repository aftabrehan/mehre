export const categories = [
  {
    id: "plain",
    name: "Plain Suits",
    image: "plain-suit-sand",
    note: "The beauty of simplicity",
  },
  {
    id: "printed",
    name: "Printed Suits",
    image: "mustard",
    note: "A little color, a little joy",
  },
  {
    id: "embroidered",
    name: "Embroidered Suits",
    image: "sage",
    note: "Details to fall in love with",
  },
  {
    id: "lehenga",
    name: "Lehengas",
    image: "lehenga-rose",
    note: "Made for a moment",
  },
  {
    id: "bridal",
    name: "Light Ivory Bridal",
    image: "bridal-ivory",
    note: "For your new beginning",
  },
] as const
export type Category = "all" | (typeof categories)[number]["id"]

export const collections = [
  {
    id: "living",
    name: "The Living Edit",
    subtitle: "The everyday collection",
    description: "Easy silhouettes, familiar colors. Beauty in the ordinary.",
    image: "collection-living",
    number: "01",
    season: "EVERYDAY / 2026",
  },
  {
    id: "rang",
    name: "Rang",
    subtitle: "The celebration collection",
    description:
      "Rich color. Flowing lehengas. A little occasion in every detail.",
    image: "collection-rang",
    number: "02",
    season: "CELEBRATION / 2026",
  },
  {
    id: "ivory",
    name: "Ivory Vows",
    subtitle: "The bridal collection",
    description:
      "Pearl tones and delicate embellishment, for a chapter all your own.",
    image: "collection-ivory",
    number: "03",
    season: "BRIDAL / 2026",
  },
] as const
export type CollectionId = "all" | (typeof collections)[number]["id"]
export type Occasion = "all" | "festive"
export type CatalogFilters = {
  category: Category
  collection: CollectionId
  occasion: Occasion
}
export const initialFilters: CatalogFilters = {
  category: "all",
  collection: "all",
  occasion: "all",
}

export type Product = {
  id: string
  name: string
  translation: string
  color: string
  swatch: string
  price: number | null
  category: Exclude<Category, "all">
  collection: Exclude<CollectionId, "all">
  image: string
  description: string
  fabric: string
  kind: string
  pieces: string
  festive: boolean
  moment: string
}
export const products: Product[] = [
  {
    id: "noor",
    name: "Noor",
    translation: "A little light",
    color: "Ivory / Oxblood",
    swatch: "#e8ddc6",
    price: 5590,
    category: "embroidered",
    collection: "living",
    image: "ivory-catalog",
    description:
      "Botanical embroidery on an ivory straight kurta, with matching trousers and an oxblood-bordered dupatta.",
    fabric: "Cotton blend",
    kind: "Embroidered suit",
    pieces: "Kurta, trousers & dupatta",
    festive: false,
    moment: "MORNING LIGHT",
  },
  {
    id: "gul",
    name: "Gul",
    translation: "In full bloom",
    color: "Muted Mustard",
    swatch: "#ba8d38",
    price: 4290,
    category: "printed",
    collection: "living",
    image: "mustard",
    description:
      "A warm mustard botanical print, relaxed kurta and coordinating bordered dupatta.",
    fabric: "Khaddar",
    kind: "Printed suit",
    pieces: "Kurta, trousers & dupatta",
    festive: false,
    moment: "GOLDEN HOURS",
  },
  {
    id: "baagh",
    name: "Baagh",
    translation: "A quiet garden",
    color: "Deep Sage",
    swatch: "#606849",
    price: 5590,
    category: "embroidered",
    collection: "rang",
    image: "sage",
    description:
      "Sand-toned floral embroidery against deep sage, paired with a light embroidered dupatta.",
    fabric: "Cotton blend",
    kind: "Embroidered suit",
    pieces: "Kurta, trousers & dupatta",
    festive: true,
    moment: "QUIET CELEBRATIONS",
  },
  {
    id: "gulabi",
    name: "Gulabi",
    translation: "Softly, in rose",
    color: "Tea Pink",
    swatch: "#bd8883",
    price: 4290,
    category: "printed",
    collection: "living",
    image: "rose",
    description:
      "Muted plum florals on tea pink, with a relaxed straight silhouette and flowing printed dupatta.",
    fabric: "Cotton blend",
    kind: "Printed suit",
    pieces: "Kurta, trousers & dupatta",
    festive: false,
    moment: "SOFT BEGINNINGS",
  },
  {
    id: "raat",
    name: "Raat",
    translation: "After the light",
    color: "Ink Black",
    swatch: "#292923",
    price: 5590,
    category: "embroidered",
    collection: "rang",
    image: "ink",
    description:
      "Ivory botanical embroidery against ink black, finished with a sheer coordinating dupatta.",
    fabric: "Cotton blend",
    kind: "Embroidered suit",
    pieces: "Kurta, trousers & dupatta",
    festive: true,
    moment: "AFTER DUSK",
  },
  {
    id: "neel",
    name: "Neel",
    translation: "A softer sky",
    color: "Dusty Blue",
    swatch: "#8095a7",
    price: 4290,
    category: "printed",
    collection: "living",
    image: "blue",
    description:
      "Pale botanical motifs and indigo borders in a soft blue palette, paired with a matching dupatta.",
    fabric: "Khaddar",
    kind: "Printed suit",
    pieces: "Kurta, trousers & dupatta",
    festive: false,
    moment: "OPEN SKIES",
  },
  {
    id: "seher",
    name: "Seher",
    translation: "A quiet morning",
    color: "Warm Sand",
    swatch: "#b9a58a",
    price: null,
    category: "plain",
    collection: "living",
    image: "plain-suit-sand",
    description:
      "A plain sand-toned straight kurta, tapered trousers and softly draped dupatta. Clean lines, beautifully at ease.",
    fabric: "Cotton-look weave",
    kind: "Plain suit",
    pieces: "Kurta, trousers & dupatta",
    festive: false,
    moment: "A SLOWER MORNING",
  },
  {
    id: "sukoon",
    name: "Sukoon",
    translation: "A moment of calm",
    color: "Soft Olive",
    swatch: "#8b8b70",
    price: null,
    category: "plain",
    collection: "living",
    image: "plain-suit-olive",
    description:
      "An unembellished olive kurta and matching trousers, softened by a light plain dupatta.",
    fabric: "Linen-look weave",
    kind: "Plain suit",
    pieces: "Kurta, trousers & dupatta",
    festive: false,
    moment: "YOUR OWN RHYTHM",
  },
  {
    id: "mahak",
    name: "Mahak",
    translation: "A lingering bloom",
    color: "Dusty Rose / Champagne",
    swatch: "#b98480",
    price: null,
    category: "lehenga",
    collection: "rang",
    image: "lehenga-rose",
    description:
      "A flowing rose lehenga with champagne botanical embroidery along the hem, a matching blouse and sheer dupatta.",
    fabric: "Silk-look skirt & sheer dupatta",
    kind: "Celebration lehenga",
    pieces: "Blouse, lehenga skirt & dupatta",
    festive: true,
    moment: "THE FIRST DANCE",
  },
  {
    id: "zari",
    name: "Zari",
    translation: "A golden thread",
    color: "Deep Maroon / Gold",
    swatch: "#703638",
    price: null,
    category: "lehenga",
    collection: "rang",
    image: "lehenga-maroon",
    description:
      "A generous maroon lehenga silhouette with fine gold botanical detail and a delicately bordered dupatta.",
    fabric: "Silk-look skirt & sheer dupatta",
    kind: "Celebration lehenga",
    pieces: "Blouse, lehenga skirt & dupatta",
    festive: true,
    moment: "AN EVENING TO KEEP",
  },
  {
    id: "aab",
    name: "Aab",
    translation: "A gentle radiance",
    color: "Light Ivory / Champagne",
    swatch: "#e9dfcc",
    price: null,
    category: "bridal",
    collection: "ivory",
    image: "bridal-ivory",
    description:
      "A light ivory bridal lehenga with tonal champagne floral embellishment, a scalloped hem and sheer embroidered dupatta.",
    fabric: "Embellished silk-look skirt & sheer dupatta",
    kind: "Ivory bridal lehenga",
    pieces: "Blouse, bridal lehenga & dupatta",
    festive: false,
    moment: "A NEW CHAPTER",
  },
  {
    id: "meher",
    name: "Meher",
    translation: "Softly, forever",
    color: "Pearl Ivory",
    swatch: "#eee7da",
    price: null,
    category: "bridal",
    collection: "ivory",
    image: "bridal-pearl",
    description:
      "A pearl ivory bridal ensemble with delicate silver-toned floral embellishment, a full skirt and an airy bordered dupatta.",
    fabric: "Embellished organza-look overlay",
    kind: "Ivory bridal lehenga",
    pieces: "Blouse, bridal lehenga & dupatta",
    festive: false,
    moment: "SOFTLY, FOREVER",
  },
]
export function filterProducts(filters: CatalogFilters) {
  return products.filter(
    (product) =>
      (filters.category === "all" || product.category === filters.category) &&
      (filters.collection === "all" ||
        product.collection === filters.collection) &&
      (filters.occasion === "all" || product.festive)
  )
}
export function formatPrice(price: number | null) {
  return price === null
    ? "Collection preview"
    : `PKR ${new Intl.NumberFormat("en-PK").format(price)}`
}
