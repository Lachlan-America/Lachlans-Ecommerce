'use client'
import { ProductType, getProducts } from "@/app/common/ProductUtils";
import Image from 'next/image';

const MAX_LENGTH = 80

export default function Card({ item }: { item: ProductType }){

    return (
        <li className="w-[300px] h-[400px] flex flex-col items-center bg-white border-2 border-black rounded-xl">
            <h1 className='flex-shrink p-5 text-xl text-black font-bold text-center'>{item.title.substring(0, MAX_LENGTH) + (item.title.length > MAX_LENGTH && "...")}</h1>
            <Image width={128} height={128} src={item.image} alt={item.title} />
            <p className='flex-shrink text-center text-black p-5'>{item.description.substring(0, MAX_LENGTH) + (item.description.length > MAX_LENGTH && "...")}</p>
        </li>
    );
}