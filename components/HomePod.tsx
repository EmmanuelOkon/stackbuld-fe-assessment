import { HomePodProps } from "@/interface";
import Image from "next/image";

const HomePod: React.FC<HomePodProps> = ({
  title,
  description,
  imageUrl,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="wrapper py-4 md:py-10 ">
      <div className="bg-white rounded-[10px] md:rounded-[20px] px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto flex flex-col justify-between md:flex-row items-center">
          <div className="mb-8 md:mb-0 md:pr-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-gray-700 text-lg mb-6">{description}</p>
            <a
              href={ctaLink}
              className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition duration-300"
            >
              {ctaText}
            </a>
          </div>
          <div className="flex justify-end">
            <Image
              width={1000}
              height={1000}
              src={imageUrl}
              alt={title}
              className="w-[300px] max-w-[514px] max-h-[417px] rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePod;
