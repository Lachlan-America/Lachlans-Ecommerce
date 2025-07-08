export type ProductType = {
    id: number,
    title: string, 
    price: number,
    description: string,
    category: string,
    image: string
} 

export function getProducts(): Promise<ProductType[]> {
  return fetch('https://fakestoreapi.com/products')
    .then((response) => {
      if (!response.ok) throw new Error("Failed to fetch products");
      return response.json();
    })
    .then((data: ProductType[]) => data);
}
