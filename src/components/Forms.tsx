export type FormData = {
  q?: string;
  min_edge_count?: string;
  max_edge_count?: string;
  min_poly_count?: string;
  max_poly_count?: string;
  min_vert_count?: string;
  max_vert_count?: string;
};

export type ModelData = {
  name: string;
  edge_count: number;
  poly_count: number;
  vert_count: number;
  top_3_categories: string[];
  images_urls?: string[];
};


export const formDataKeys: (keyof FormData)[] = [
  'q',
  'min_edge_count',
  'max_edge_count',
  'min_poly_count',
  'max_poly_count',
  'min_vert_count',
  'max_vert_count',
];
