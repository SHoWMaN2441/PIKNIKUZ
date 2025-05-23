import axios from "axios";
import { create } from "zustand";

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  category_id: string;
  category: {
    id: string;
    name: string;
    description: string;
  };
  image_src: string;
  product_images: {
    id: string;
    image_id: string;
    images_src: string;
    product_id: string;
  }[];
  video_src: string;
};

type ProductStore = {
  products: Product[];
  DetailsId: string;
  searchTerm: string;
  categoryFilter: string;
  setDetailsId: (id: string) => void;
  setSearchTerm: (term: string) => void;
  setCategoryFilter: (category: string) => void;
  fetchProducts: () => Promise<void>;
  addToCart: () => void;

  cartItems: number;
};

const useProductStore = create<ProductStore>((set) => ({
  products: [],
  DetailsId: "",
  searchTerm: "",
  categoryFilter: "",
  cartItems: 0,
  addToCart: () => set((state) => ({ cartItems: state.cartItems + 1 })),

  setDetailsId: (id) => set({ DetailsId: id }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  setCategoryFilter: (category) => set({ categoryFilter: category }),

  fetchProducts: async (searchTerm = "") => {
    try {
      const res = await axios.get("https://api.piknicuz.com/api/products");
      const filteredProducts = res.data.data.filter((product: Product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      set({ products: filteredProducts });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));

export default useProductStore;
