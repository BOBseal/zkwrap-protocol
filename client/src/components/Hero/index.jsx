import React from 'react'
import {FaExternalLinkAlt } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { socialMedias } from '../../constants'
import Info from '../Info'

const Hero = () => {
  return (
    <div className='h-[800px] hero w-full bg-primary'>
        <Info />

        <div className='flex h-[80%] w-[90%] my-auto mx-auto flex-col items-start justify-between'>
            <div> 
                <h3 className='text-textPrimary text-[2.5rem] font-bold font-poppins mt-[20px]'> ZKWRAP </h3>
             </div>

            <div className='flex flex-col gap-[30px]'> 
                <div>
                    <h3 className='md:text-[3rem] text-textPrimary font-poppins text-[2rem] font-bold'> ZkWrap Protocol </h3>
                    <p className='md:text-[18px] mt-[10px] text-[16px] font-poppins font-semibold text-textPrimary break-normal break-words '> Swap, earn, and govern the leading decentralized crypto trading
                        protocol. 
                    </p>
                </div>

                <Link to="/main/swap" className='md:w-[200px] w-[200px] flex items-center justify-center gap-x-[10px] md:mt-[30px] mt-[20px] md:h-[60px] h-[40px] bg-secondary rounded-[10px] cursor-pointer hover:opacity-[0.8] '>
                    <span className='text-textPrimary tracking-wide md:text-[16px] text-[14px] font-poppins font-semibold uppercase '> Enter App </span>
                   <FaExternalLinkAlt className="text-textPrimary md:text-[16px] text-[14px] font-poppins font-semibold uppercase" />
                </Link>

                <div className='flex flex-row mt-[20px] items-center gap-x-[20px]'>
                    { socialMedias.map(social => (
                        <a key={social.id} href={social.link}>
                            <social.Icon className="md:text-[2.5rem] text-[2rem] font-poppins font-bold text-textPrimary" />
                        </a>
                    )) }
                </div>

             </div>
        </div>
    </div>
  )
}

export default Hero