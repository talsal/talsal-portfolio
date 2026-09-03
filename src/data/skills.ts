export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', '.NET / C#', 'SQL', 'Shell Scripting', 'Delphi', 'Swift', 'C', 'C++'],
  },
  {
    title: 'AI & Data',
    skills: ['Claude', 'Claude Code', 'GPT-4', 'Gemini', 'MongoDB', 'PostgreSQL', 'Elasticsearch', 'Oracle', 'MySQL'],
  },
  {
    title: 'Automation Frameworks',
    skills: ['Selenium', 'Cucumber', 'JMeter', 'JSystem', 'PyTest', 'UFT / QTP', 'WinRunner', 'LoadRunner', 'Test Director / QC'],
  },
  {
    title: 'CI/CD & DevOps',
    skills: ['GitHub Actions', 'Jenkins', 'Bamboo', 'Chef', 'Git', 'AWS (S3)', 'Docker', 'Linux', 'Mac OS', 'Windows', 'Grafana'],
  },
];
