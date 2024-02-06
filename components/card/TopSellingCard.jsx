import React from 'react'
import Image from 'next/image';


const TopSellingCard = ({imageUrl,title,productName,currentPrice, oldPrice}) => {
  return (
    <div className='mt-32'>
        <div className='flex justify-center align-items-center'>
            <div>
                <Image src={imageUrl} alt="headset" width={150} height={5} loading="lazy" className=''/>
            </div>
            <div className='mt-6 text-left text-xs'>
                <div>
                    <p className='text-gray-400 pb-2'>{title}</p>
                </div>
                <div>
                    <p className='pb-2'>{productName}</p>
                </div>
                <div className='flex'>
                    <div>
                        <p className='text-red-700 mr-3'>{currentPrice}</p>
                    </div>
                    <div>
                        <p className='line-through text-gray-400'>{oldPrice}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default TopSellingCard