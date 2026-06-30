export interface Country {
  id: string;
  name: string;
  flag: string; // emoji
  color: string; // accent hex (drawn from the national flag)
  greeting: string; // native greeting, romanized
  /** true when `color` is light enough to need dark text on top */
  light: boolean;
}

// The six nations Utsav represents.
export const countries: Country[] = [
  {
    id: 'india',
    name: 'India',
    flag: '🇮🇳',
    color: '#FF9933',
    greeting: 'Namaste',
    light: true,
  },
  {
    id: 'pakistan',
    name: 'Pakistan',
    flag: '🇵🇰',
    color: '#01411C',
    greeting: 'As-salāmu ʿalaykum',
    light: false,
  },
  {
    id: 'bangladesh',
    name: 'Bangladesh',
    flag: '🇧🇩',
    color: '#006A4E',
    greeting: 'Nomoshkar',
    light: false,
  },
  {
    id: 'bhutan',
    name: 'Bhutan',
    flag: '🇧🇹',
    color: '#FFC72C',
    greeting: 'Kuzuzangpo',
    light: true,
  },
  {
    id: 'sri-lanka',
    name: 'Sri Lanka',
    flag: '🇱🇰',
    color: '#8D153A',
    greeting: 'Ayubowan',
    light: false,
  },
  {
    id: 'nepal',
    name: 'Nepal',
    flag: '🇳🇵',
    color: '#DC143C',
    greeting: 'Namaste',
    light: false,
  },
];
