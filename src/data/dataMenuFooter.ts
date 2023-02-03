export interface PropsDataSubTitleMenFooter {
  title: string;
  link?: string;
}

export interface PropsDataMenuFooter {
  title: string;
  subTitle: PropsDataSubTitleMenFooter[];
}

const dataMenuFooter: PropsDataMenuFooter[] = [
  {
    title: "Our Community",
    subTitle: [
      {
        title: "Join Our Discord",
      },
      {
        title: "Regional Comunity",
      },
      {
        title: "How To Join",
      },
      {
        title: "Regional Marketplace",
      },
    ],
  },
  {
    title: "Our Company",
    subTitle: [
      {
        title: "About us",
      },
      {
        title: "Whitepaper",
      },
      {
        title: "Term of Use",
      },
      {
        title: "Join with Us",
      },
    ],
  },
];

export { dataMenuFooter };
