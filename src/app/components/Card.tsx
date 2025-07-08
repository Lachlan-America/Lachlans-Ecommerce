'use client'
import { ProductType } from "@/app/common/ProductUtils";
import Image from 'next/image';

export default function Card({ item }: { item: ProductType }){
    return (
        <li className="w-[300px] h-[350px] flex flex-col items-center bg-white border-2 border-black rounded-xl">
            <h1 className='flex-shrink pt-5 px-5 text-xl text-black font-bold text-center line-clamp-2 overflow-hidden'>{item.title}</h1>
            <Image width={128} height={128} src={item.image} alt={item.title} className="p-5"/>
            <p className='flex-shrink text-center text-black p-5 line-clamp-3 overflow-hidden'>{item.description}</p>
        </li>
    );
}