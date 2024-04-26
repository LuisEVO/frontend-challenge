export type PlanResponse = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export type Plan = PlanResponse & {
  slug: string;
  recommended?: boolean;
  offerPrice?: number;
  icon?: string;
};
