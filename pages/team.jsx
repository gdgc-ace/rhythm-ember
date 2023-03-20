import Outlet from '@/components/Outlet'
import React from 'react'

const team = () => {
  return (
    <Outlet>
        <div className='py-10 px-12 space-y-6'>
            <div className='space-y-2'>
                <h1 className='text-2xl md:text-4xl font-black text-center uppercase'>Meet The team</h1>
                <div className='text-2xl md:text-4xl font-black text-center'>2023</div>
            </div>
            <div className='space-y-8 max-w-7xl mx-auto'>
                <div className='flex items-center  gap-8'>
                    <div className='h-3 bg-black w-full' />
                    <div className='text-xl md:text-2xl font-black'>HEADS</div>
                    <div className='h-3 bg-black w-full' />
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    {[...Array(3)]?.map((_, index) => (
                        <div className='bg-[#D9D9D9] h-[308px] w-[256px]'>

                        </div>
                    ))}
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    {[...Array(8)]?.map((_, index) => (
                        <div className='bg-[#D9D9D9] h-[278px] w-[256px]'>

                        </div>
                    ))}
                </div>
            </div>
            <div className='space-y-8 max-w-7xl mx-auto'>
                <div className='flex items-center  gap-8'>
                    <div className='h-3 bg-black w-full' />
                    <div className='text-xl md:text-2xl font-black'>ASSISTANTS</div>
                    <div className='h-3 bg-black w-full' />
                </div>
                <div className='flex flex-wrap justify-center gap-8'>
                    {[...Array(16)]?.map((_, index) => (
                        <div className='bg-[#D9D9D9] h-[278px] w-[256px]'>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </Outlet>
  )
}

export default team