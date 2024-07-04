

export type Condition = 'new' | 'used' | '';

export interface ProductInterface {
  title: string;
  condition: Condition;
  price: number;
  thumbnail: string;
  id: string;
}
