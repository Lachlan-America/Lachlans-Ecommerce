'use client'
import { use } from 'react';
import Card from './Card';
import { ProductType } from "@/app/common/ProductUtils";

export default function Products({ products, category }: { products: Promise<ProductType[]>, category: string}) {
  const allProducts = use(products).filter(product => product.description.toLowerCase().includes(category))
 
  return (
    <ol className="flex flex-row flex-wrap gap-4 p-10 w-full h-full">
      {allProducts.map((product) => (
        <Card key={product.id} item={product} />
      ))}
    </ol>
  )
}