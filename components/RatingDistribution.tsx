import Image from "next/image";
import { Icons } from "@/public/assets/icon";
import { RatingDistributionProps } from "@/interface";


const RatingDistribution: React.FC<RatingDistributionProps> = ({
  ratings,
  totalReviews,
  averageRating,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-full mx-auto body ">
      <div className="mb-4 text-gray-600 text-sm body ">
        4 Reviews
      </div>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold body">Product Rating:</h3>
        <div className="flex items-center">
          <div className="flex items-center text-yellow-500 mr-2">
            <Image
              src="/assets/images/applerate.png"
              width={100}
              height={100}
              alt="test"
              className=" max-w-[83px] h-[15px] "
            />
          </div>
          <span className="text-lg font-bold body ">
            {averageRating.toFixed(1)}
          </span>
        </div>
      </div>

      {ratings.map((rating) => (
        <div key={rating.stars} className="flex items-center mb-2">
          <span className="text-sm text-gray-600 w-8 flex items-center gap-1 ">
            {rating.stars} <Icons.SingleStar />{" "}
          </span>
          <div className="relative w-[675px] h-4 bg-gray-200 rounded-full mx-2">
            <div
              className="absolute h-full bg-orange-500 rounded-full"
              style={{
                width: `${(rating.count / totalReviews) * 100}%`,
              }}
            />
          </div>
          <span className="text-sm text-gray-600">{rating.count}</span>
        </div>
      ))}
    </div>
  );
};

export default RatingDistribution;
