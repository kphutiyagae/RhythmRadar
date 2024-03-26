'use client'
import React from 'react';
import Image from 'next/image';
import SignupHeroImage from '/public/images/signup-hero.jpg'

export default function Signup(){
  return (
    <div>
      <Image src={SignupHeroImage} objectFit={'contain'} height={window.innerHeight} className='object-center object-cover flex justify-center items-center' alt='Hero Image for signup page'/>
    </div>
  );
};

