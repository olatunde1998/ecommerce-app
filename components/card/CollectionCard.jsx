import React from 'react'
import Image from 'next/image';

const CollectionCard = () => {
  return (
    <div className='relative mt-[50px] max-w-[250px] mx-auto '>
        <div className='bg-gray-200 max-w-[250px]'>
            <Image src="/images/laptop.png" alt="laptop" width={300} height={5} loading="lazy" className=''/>
        </div>
        <div className='absolute inset-0 bg-red-600 bg-opacity-50 w-[250px] h-full  border-t-[310px] border-l-[10px] border-r-[170px]  border-t-transparent border-l-transparent mt-[1px]    '>
            <div className='w-[250px] mt-[-270px] ml-[20px] text-white text-xs text-left'>
                <p className='font-thin'>Laptop </p>
                <p className='mb-1'>Collection</p>
                <p>SHOP NOW</p>
            </div> 
            
        </div>
    </div>
    
    
  
  
  

  )
}

export default CollectionCard