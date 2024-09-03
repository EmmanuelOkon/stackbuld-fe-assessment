import Image from "next/image";
import { ReviewProps } from "@/interface";

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  role,
  review,
  rating,
  avatarUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col space-y-4 body">
      <div className="flex items-center space-x-1">
        <div className="flex items-center">
          <Image
            src="/assets/images/applerate.png"
            width={100}
            height={100}
            alt="test"
            className=" max-w-[83px] h-[15px] "
          />
        </div>
      </div>
      <p className="text-gray-700">{review}</p>
      <div className="flex items-center space-x-4">
        <Image
          width={100}
          height={100}
          src={avatarUrl}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h4 className="text-gray-800 font-semibold">{name}</h4>
          <span className="text-gray-500 text-sm">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
