export interface FlightSearchParams {
    originSkyId: string;
    destinationSkyId: string;
    originEntityId: string;
    destinationEntityId: string;
    date: string; // YYYY-MM-DD
    cabinClass: "economy" | "premium_economy" | "business" | "first";
    adults: string;
    sortBy: "best" | "cheapest" | "fastest";
    currency: string;
    market: string;
    countryCode: string;
}

// TypeScript interfaces for flight search API response

export interface FlightApiResponse {
  status: boolean;
  timestamp: number;
  sessionId: string;
  data: FlightApiData;
}

export interface FlightApiData {
  context: SearchContext;
  itineraries: Itinerary[];
  messages: string[];
  filterStats: FilterStats;
}

export interface SearchContext {
  status: string;
  totalResults: number;
}

export interface FilterStats {
  duration: DurationStats;
  airports: AirportGroup[];
  carriers: CarrierStats[];
  stopPrices: StopPrices;
}

export interface DurationStats {
  min: number;
  max: number;
}

export interface AirportGroup {
  city: string;
  airports: AirportInfo[];
}

export interface AirportInfo {
  id: string;
  name: string;
}

export interface CarrierStats {
  id: number;
  logoUrl: string;
  name: string;
}

export interface StopPrices {
  direct: StopPriceInfo;
  one: StopPriceInfo;
  twoOrMore: StopPriceInfo;
}

export interface StopPriceInfo {
  isPresent: boolean;
  formattedPrice?: string;
}

export interface Itinerary {
  id: string;
  price: Price;
  legs: Leg[];
  isSelfTransfer: boolean;
  isProtectedSelfTransfer: boolean;
  farePolicy: FarePolicy;
  eco: EcoInfo;
  tags: string[];
  isMashUp: boolean;
  hasFlexibleOptions: boolean;
  score: number;
}

export interface Price {
  raw: number;
  formatted: string;
}

export interface Leg {
  id: string;
  origin: Airport;
  destination: Airport;
  durationInMinutes: number;
  stopCount: number;
  isSmallestStops: boolean;
  departure: string;
  arrival: string;
  timeDeltaInDays: number;
  carriers: Carriers;
  segments: Segment[];
}

export interface Airport {
  id: string;
  name: string;
  displayCode: string;
  city: string;
  isHighlighted: boolean;
}

export interface Carriers {
  marketing: MarketingCarrier[];
  operationType: string;
}

export interface MarketingCarrier {
  id: number;
  logoUrl: string;
  name: string;
}

export interface Segment {
  id: string;
  origin: FlightPlace;
  destination: FlightPlace;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  flightNumber: string;
  marketingCarrier: CarrierInfo;
  operatingCarrier: CarrierInfo;
}

export interface FlightPlace {
  flightPlaceId: string;
  displayCode: string;
  parent: PlaceParent;
  name: string;
  type: string;
}

export interface PlaceParent {
  flightPlaceId: string;
  displayCode: string;
  name: string;
  type: string;
}

export interface CarrierInfo {
  id: number;
  name: string;
  alternateId: string;
  allianceId: number;
}

export interface FarePolicy {
  isChangeAllowed: boolean;
  isPartiallyChangeable: boolean;
  isCancellationAllowed: boolean;
  isPartiallyRefundable: boolean;
}

export interface EcoInfo {
  ecoContenderDelta: number;
}

// Helper types for common operations
export type FlightSearchResponse = FlightApiResponse;
export type FlightItinerary = Itinerary;
export type FlightLeg = Leg;
export type FlightSegment = Segment;

