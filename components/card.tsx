import { FC } from "react";
import Image from "next/image";

interface CardProps {
  title: string,
  description: string,
  imgSrc: string,
  link: string
}

const Card: FC<CardProps> = ({ title, description, imgSrc: imgSrc, link }) => {
  return (
    <a
      className="flex flex-col group bg-white overflow-hidden transition"
      href={link}
    >
      <div className="border-grey border-2 relative pt-[40%] sm:pt-[40%] lg:pt-[50%] rounded-xl overflow-hidden">
        <Image
          className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
          src={imgSrc}
          alt="Image Description"
          fill
        />
      </div>
      <div className="py-5 md:py-10">
        <p className="font-sans my-2 text-4xl font-bold">{title}</p>
        <p className="text-balance font-sans my-2 text-xl italic">
          {description}
        </p>
      </div>
    </a>
  );
}
export default Card;
