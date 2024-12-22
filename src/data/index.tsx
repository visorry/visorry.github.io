export const filters = ["All", "About", "Work"];

export const layouts = {
  all: {
    lg: [ // > 1216px
      { i: "bio", x: 0, y: 0, w: 5, h: 4, isResizable: true },
      { i: "theme-toggle", x: 9, y: 1, w: 4, h: 3, isResizable: true },
      { i: "text-marquee", x: 5, y: 0, w: 7, h: 1, isResizable: true },
      { i: "linkedin", x: 0, y: 4, w: 2, h: 4, isResizable: true },
      { i: "github", x: 5, y: 1, w: 3, h: 3, isResizable: true },
      { i: "email", x: 0, y: 8, w: 6, h: 2, isResizable: true },
      { i: "my-stack", x: 2, y: 4, w: 4, h: 4, isResizable: true },
      { i: "jobs", x: 6, y: 4, w: 6, h: 5, isResizable: true },
      { i: "project-2", x: 0, y: 10, w: 6, h: 6, isResizable: true },
      { i: "project-1", x: 6, y: 9, w: 6, h: 6, isResizable: true },
      { i: "project-3", x: 0, y: 16, w: 6, h: 7, isResizable: true },
      { i: "project-4", x: 6, y: 14, w: 6, h: 7, isResizable: true },
    ],
    md: [ // 814px - 1215px
      { i: "bio", x: 0, y: 0, w: 5, h: 6, isResizable: true },
      { i: "theme-toggle", x: 7, y: 1, w: 5, h: 7, isResizable: true },
      { i: "map", x: 8, y: 6, w: 2, h: 6, isResizable: true },
      { i: "text-marquee", x: 5, y: 0, w: 5, h: 1, isResizable: true },
      { i: "linkedin", x: 7, y: 8, w: 3, h: 2, isResizable: true },
      { i: "github", x: 5, y: 8, w: 2, h: 4, isResizable: true },
      { i: "email", x: 7, y: 8, w: 3, h: 2, isResizable: true },
      { i: "my-stack", x: 0, y: 6, w: 5, h: 6, isResizable: true },
      { i: "jobs", x: 0, y: 12, w: 10, h: 10, isResizable: true },
      { i: "project-1", x: 0, y: 22, w: 5, h: 8, isResizable: true },
      { i: "project-2", x: 6, y: 22, w: 5, h: 8, isResizable: true },
      { i: "project-3", x: 0, y: 30, w: 5, h: 8, isResizable: true },
      { i: "project-4", x: 5, y: 30, w: 5, h: 8, isResizable: true },
    ],
    sm: [ // 0px - 813px
      { i: "bio", x: 0, y: 1, w: 4, h: 6, isResizable: true },
      { i: "theme-toggle", x: 0, y: 7, w: 4, h: 5, isResizable: true },
      { i: "map", x: 0, y: 12, w: 4, h: 4, isResizable: true },
      { i: "text-marquee", x: 0, y: 0, w: 4, h: 1, isResizable: true },
      { i: "linkedin", x: 0, y: 16, w: 2, h: 3, isResizable: true },
      { i: "github", x: 2, y: 16, w: 2, h: 3, isResizable: true },
      { i: "codepen", x: 0, y: 19, w: 2, h: 3, isResizable: true },
      { i: "email", x: 2, y: 19, w: 2, h: 3, isResizable: true },
      { i: "my-stack", x: 0, y: 22, w: 4, h: 6, isResizable: true },
      { i: "jobs", x: 0, y: 28, w: 4, h: 16, isResizable: true },
      { i: "project-1", x: 0, y: 44, w: 6, h: 10, isResizable: true },
      { i: "project-2", x: 0, y: 54, w: 6, h: 10, isResizable: true },
      { i: "project-3", x: 0, y: 64, w: 6, h: 10, isResizable: true },
      { i: "project-4", x: 0, y: 74, w: 6, h: 10, isResizable: true },
    ],
  },
}  

export const heights: { [key: string]: number } = {
  // lg: 280,
  // lg: 70,
  lg: 58,
  // md: 180,
  md: 33,
  // sm: 164,
  sm: 29,
  // xs: 136,
};

export const memojis = ["images/memoji-1.png", "images/memoji-2.png"];
