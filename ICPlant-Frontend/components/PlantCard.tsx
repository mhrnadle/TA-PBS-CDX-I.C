"use client";

import { useState } from "react";
import Image from "next/image";

import { calculateplantRent, generateplantImageUrl } from "@utils";
import { plantProps } from "@types";
import CustomButton from "./CustomButton";
import plantDetails from "./PlantDetails";

interface plantplantdProps {
  plant: plantProps;
}

const plantplantd = ({ plant }: plantplantdProps) => {
  const { city_mpg, year, make, model, transmission, drive } = plant;

  const [isOpen, setIsOpen] = useState(false);

  const plantRent = calculateplantRent(city_mpg, year);

  return (
    <div className="plant-plantd group">
      <div className="plant-plantd__content">
        <h2 className="plant-plantd__content-title">
          {make} {model}
        </h2>
      </div>

      <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {plantRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateplantImageUrl(plant)} alt='plant model' fill priority className='object-contain' />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-grey'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
            <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="plant-plantd__icon">
            <Image src="/tire.svg" width={20} height={20} alt="seat" />
            <p className="plant-plantd__icon-text">{drive.toUpperCase()}</p>
          </div>
          <div className="plant-plantd__icon">
            <Image src="/gas.svg" width={20} height={20} alt="seat" />
            <p className="plant-plantd__icon-text">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="plant-plantd__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon='/right-arrow.svg'
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      {/* <plantDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} plant={plant} /> */}
    </div>
  );
};

export default plantplantd;
