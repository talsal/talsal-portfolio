export interface EducationEntry {
  title: string;
  institution: string;
  years: string;
  detail?: string;
}

export const education: EducationEntry[] = [
  {
    title: 'B.Sc. in Software Engineering',
    institution: 'Holon Institute of Technology (HIT)',
    years: '1994 – 1998',
  },
  {
    title: 'High School Diploma in Computer Programming',
    institution: 'ORT Givat Ram, Jerusalem',
    years: '1986 – 1990',
  },
];

export const militaryService: EducationEntry = {
  title: 'Computing NCO, Israeli Air Force',
  institution: 'Developer for the MAGIC system in anti-aircraft maintenance',
  years: '1990 – 1993',
};
