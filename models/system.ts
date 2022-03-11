export interface Access_right {
  superadmin: boolean;
  supplier: boolean;
  client_admin: boolean;
  member: boolean;
}
export interface Badge {
  text: string;
  variant: string;
}

export interface Category {
  id: number;
  title: string;
  is_valid: boolean;
  sort_by: number;
  parent: number;
  isTitle: boolean;
  isMenuCollapsed: boolean;
  access: Access_right;
  icon: string;
  badge: Badge;
  children?: Category;
  link: string;
  regular_product_count: number;
  pingo_product_count: number;
}
