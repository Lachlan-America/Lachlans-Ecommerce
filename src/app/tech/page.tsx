import Products from "../components/Products";
import { Suspense } from "react";
import { getProducts } from "@/app/common/ProductUtils";

export default function Tech() {
  const products = getProducts();

  return (
    <>
      <h1 className="text-[50px] text-black font-bold pb-5">Tech</h1>
      <Suspense fallback={<div className="text-black text-xl">Loading...</div>}>
        <Products products={products} category="technology"/>
      </Suspense>
    </>
  );
}
