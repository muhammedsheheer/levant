import type { Review } from "@/types/review.type";
import axios, { type AxiosResponse } from "axios";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

interface PlaceDetailsResponse {
  data: {
    reviews: Review[];
  };
  // result: {
  // };
  status: string;
}

export async function GET() {
  const placeId = process.env.GOOGLE_RESTAURANT_PLACE_ID;
  if (!placeId) {
    return NextResponse.json(
      { error: "Place ID is required" },
      { status: 400 },
    );
  }

  try {
    const url = `https://api.staging.app.thefoodo.com/restaurant-reviews/${placeId}`;
    const response: AxiosResponse<PlaceDetailsResponse> = await axios.get(url);

    // if (response.data.status !== "OK") {
    //   return NextResponse.json(
    //     { error: "Failed to fetch reviews", details: response.data },
    //     { status: 400 },
    //   );
    // }

    const reviews = response.data.data.reviews || [];
    return NextResponse.json(reviews, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: "An error occurred while fetching reviews",
        details: (error as Error).message,
      },
      { status: 500 },
    );
  }
}
