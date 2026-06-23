export interface Event {
  id: string;
  name: string;
  description: string;
  semester: 'Fall' | 'Spring' | 'Ongoing';
  month?: string;
  accentColor: string;
  featured?: boolean;
}

export const events: Event[] = [
  {
    id: 'dhol-baaje',
    name: 'Dhol Baaje',
    description:
      'Our flagship fall event — a garba-style dance and cultural celebration that draws hundreds of students from across campus. One of the biggest nights of the semester.',
    semester: 'Fall',
    month: 'October',
    accentColor: '#E07B1A',
    featured: true,
  },
  {
    id: 'dance-4-me',
    name: 'Dance 4 Me',
    description:
      'A charity dance competition and showcase. Teams compete, audiences vote, and thousands of dollars are raised for a featured nonprofit each year.',
    semester: 'Fall',
    month: 'November',
    accentColor: '#992218',
    featured: true,
  },
  {
    id: 'south-asian-week',
    name: 'South Asian Week',
    description:
      'A week-long series celebrating South Asian culture — cooking nights, panels, movie screenings — culminating in a headline performance.',
    semester: 'Spring',
    month: 'February',
    accentColor: '#3D6B4F',
    featured: true,
  },
  {
    id: 'nataraj',
    name: 'Nataraj',
    description:
      'Our annual performing arts showcase. 15+ teams take the stage across dance, music, and spoken word. The e-board performs too — weeks of rehearsals, one night to show for it.',
    semester: 'Spring',
    month: 'March',
    accentColor: '#C4821A',
    featured: true,
  },
  {
    id: 'chai-chats',
    name: 'Chai & Chats',
    description:
      'Recurring community conversations, hosted in partnership with other campus organizations. Come for the chai, stay for the connections.',
    semester: 'Ongoing',
    accentColor: '#6B5B3E',
  },
];
