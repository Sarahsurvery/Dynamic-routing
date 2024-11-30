import { CountryDetails } from "@/app/components/types/types";
import Link from "next/link";

const CountryName = ({ params }: { params: { country_name: string } }) => {
  const countryDetails: CountryDetails[] = [
    {
      name: "Pakistan",
      capital: "Islamabad",
      population: "241 million",
    },
    {
      name: "SaudiArabia",
      capital: "Riyadh",
      population: "35 million",
    },
    {
      name: "US",
      capital: "Washington",
      population: "333 million",
    },
    {
      name: "India",
      capital: "New Dehli",
      population: "1.4 billion",
    },
    {
      name: "China",
      capital: "beijing",
      population: "1.4 billion",
    },
  ];

  const country = countryDetails.find(
    (c) => c.name.toLowerCase() === params.country_name.toLowerCase()
  );

  if (!country) {
    return (
      <h1 className="text-white text-center text-2xl"> Country Not Found! </h1>
    );
  }
  return (
    <div className="text-center m-10 bg-gray-500 rounded-lg">
      <div className="text-white text-center text-xl p-4">
        <h1 className="m-4"> Name: {country.name}</h1>
        <h1 className="m-4"> Population: {country.population}</h1>
        <h1 className="m-4"> Capital: {country.capital}</h1>
        <Link href="/country" className="m-2 p-3 bg-blue-600 rounded-md text-base">Back to Country List</Link>
      </div>
    </div>
  );
};

export default CountryName;