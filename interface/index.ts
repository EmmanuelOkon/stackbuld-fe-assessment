
export interface AppContainerProps {
  children: React.ReactNode;
}

export interface Product {
  id?: number;
  name: string;
  price: number;
  rating: number;
  vendor?: string;
  imageUrl?: string;
  category: string;
  originalPrice?: string;
}

export interface VendorCardProps {
  name?: string;
  shopName?: string;
  rating: number;
  totalRatings: number;
  distance?: number;
  freeDelivery: boolean;
}

export interface RatingDistributionProps {
  ratings: {
    stars: number;
    count: number;
  }[];
  totalReviews: number;
  averageRating: number;
}

export interface ReviewProps {
  name: string;
  role: string;
  review: string;
  rating: number;
  avatarUrl: string;
}

export interface HomePodProps {
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

export interface VendorInfoProps {
  name: string;
  rating: number;
  numRatings: number;
  address: string;
  phone: string;
  description: string;
}
