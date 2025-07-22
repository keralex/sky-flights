import type { FlightSearchParams, FlightSearchResponse } from "../types/flights";

const BASE_URL =
    "https://sky-scrapper.p.rapidapi.com/api/v1/flights/searchFlights";

export const fetchFlights = async (params: FlightSearchParams): Promise<FlightSearchResponse>=> {
    const url = new URL(BASE_URL);

    Object.entries(params).forEach(([key, value]) => {
        url.searchParams.append(key, value);
    });

    const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY!,
            "x-rapidapi-host": "sky-scrapper.p.rapidapi.com",
        },
    });

    if (!response.ok) {
        throw new Error(`Error fetching flights: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};
