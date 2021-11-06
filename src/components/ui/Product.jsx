import React from 'react'
import { FiPlus } from 'react-icons/fi'

export default function Product({ title, image, alt, price }) {
    return (
        <div className="p-4 text-center bg-white flex flex-col items-center justify-center relative border border-gray-50">
            <img src={image} className="cursor-pointer" alt={title} />
            <p className="text-sm text-brand-color font-semibold">₺ {price}</p>
            <p className="text-sm text-gray-800 font-semibold my-2">{title}</p>
            <p className="text-sm text-gray-500 font-semibold">{alt}</p>
            <div className="absolute hover:border-primary-brand-color bg-white hover:border-2 transition cursor-pointer w-8 h-8 rounded-md border shadow border-gray-200 flex items-center justify-center text-brand-color top-3 right-3">
                <FiPlus size={16} />
            </div>  
        </div>
    )
}
