interface Page {
  video: string;
  tags: [string, string, string, string];
  brochure: string;
  sidetext: Record<"title" | "body" | "url", string>[];
  carousel: string[];
  map: PageMap;
  environment: {
    [k: string]: PageEnv;
  };
}

interface PageMap {
  map: string;
  link: string;
  title: string;
  body: string;
  location: string;
  coords: [number, number];
}

interface PageEnv {
  "3D": string;
  "2D": string;
  surface: string;
  environments: number;
  bathrooms: number;
  rooms: number;
}
