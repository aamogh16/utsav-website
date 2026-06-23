export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export const team: TeamMember[] = [
  { id: 'namratha', name: 'Namratha Chembeti', role: 'President' },
  { id: 'aarushi', name: 'Aarushi Trivedi', role: 'President' },
  { id: 'amogh', name: 'Amogh Athimamula', role: 'Vice President' },
  { id: 'prerna', name: 'Prerna Kumari', role: 'Secretary' },
  { id: 'ayush', name: 'Ayush Patel', role: 'Treasurer' },
  { id: 'kostub', name: 'Kostub Kumar', role: 'PAAC Chair' },
  { id: 'mukesh', name: 'Mukesh Kandra', role: 'Cultural Chair' },
  { id: 'aditi', name: 'Aditi Ashokkumar', role: 'Media Executive' },
  { id: 'shreyas', name: 'Shreyas Kambhampati', role: 'Social Relations Chair' },
  { id: 'aisha', name: 'Aisha Khatnani', role: 'Design Chair' },
];
