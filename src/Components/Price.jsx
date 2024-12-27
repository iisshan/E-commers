import { CheckCircle2, CheckIcon } from "lucide-react";
import {features, pricingOptions} from '../constants';

export const Price = () => {
  return (
   <div className="mt-20">
   <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
   <div className="flex flex-wrap">
    {pricingOptions.map((items, index) =>(
        <div key={index} className="w-full  lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
                <p className="text-4xl mb-8">
                    {items.title}
                    {items.title === "Pro" &&(
                        <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text text-xl mb-4 ml-2">(most popular)</span>
                    )}
                </p>
                <p className="mb-8 ">
                    <span className="text-5xl mt-6 mr-2">
                        {items.price}
                    </span>
                    <span className="text-neutral-400 -tracking-tight">/month</span>

                </p>
                <ul>
                    {items.features.map((items1 , index1) =>(
                        <li key={index1} className="mt-8 flex items-center ">
                           <CheckCircle2/>
                           <span className="ml-2">{items1}</span>
                           
                        </li>

                    ))}
                </ul>
                <a href="#" className="inline-flex justify-center items-center w-full h-12 p-5 mt-20  tracking-tight text-xl border border-orange-400 hover:bg-orange-800 rounded-lg transition duration-200">Subscribe</a>


            </div>
        </div>
    ))}
   </div>
   </div>
  )
}
