export interface Packet {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
}

export const packets: Packet[] = [
  {
    id: 'aloha-welcome',
    name: 'Protein Power Mix',
    shortDescription: 'High-protein energy for your active day',
    description:
      'A premium blend of protein-rich nuts, seeds, and dried fruits. Perfect for pre-workout fuel or a healthy afternoon snack. Packed with 15g of protein per serving and made with all-natural ingredients.',
    image: '/assets/generated/makana-packet-1.dim_800x800.png',
  },
  {
    id: 'celebration-joy',
    name: 'Energy Boost Bundle',
    shortDescription: 'Sustained energy for every age',
    description:
      'Our most popular snack bundle featuring protein bars, trail mix, and wholesome granola bites. Designed to keep you energized throughout the day with clean, healthy ingredients and no artificial additives.',
    image: '/assets/generated/makana-packet-2.dim_800x800.png',
  },
  {
    id: 'gratitude-express',
    name: 'Wellness Variety Pack',
    shortDescription: 'Premium nutrition in every bite',
    description:
      'A carefully curated selection of our best-selling healthy snacks. Features high-protein options, nutrient-dense treats, and wholesome ingredients. Perfect for families and suitable for all ages.',
    image: '/assets/generated/makana-packet-3.dim_800x800.png',
  },
];
