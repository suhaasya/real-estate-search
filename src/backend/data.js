import { v4 as uuid } from "uuid";

const estate_data = [
  {
    id: uuid(),
    area: "Westchester County",
    address: "6 Garth rd, Scarsdale, NY 10583",
    city: "Scarsdale",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/1.jpg",
    type: "Duplex",
    beds: 3,
    baths: 1,
    price: 2950,
    startDate: "2022-8-14",
  },
  {
    id: uuid(),
    area: "Westchester County",
    address: "39 Sterling ave, White Plains, NY 10606",
    city: "White Plains",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/2.jpg",
    type: "Condo",
    beds: 2,
    baths: 2,
    price: 4450,
    startDate: "2022-9-14",
  },
  {
    id: uuid(),
    area: "Albany Couty",
    address: "62 Highland St, Eastchester, NY 10608",
    city: "Eastchester",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/3.jpg",
    type: "Single Family",

    beds: 4,
    baths: 1,
    price: 3250,
    startDate: "2022-5-14",
  },
  {
    id: uuid(),
    area: "Albany Couty",
    address: "33 Alden Pl, Bronxville, NY 10708",
    city: "Bronxville",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/4.jpg",
    type: "Townhouse",

    beds: 3,
    baths: 1,
    price: 6650,
    startDate: "2022-3-14",
  },
  {
    id: uuid(),
    area: "Cayuga County",
    address: "261 California rd, Mamaroneck, NY 10612",
    city: "Mamaroneck",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/5.jpg",
    type: "Studio",
    beds: 1,
    baths: 1,
    price: 2650,
    startDate: "2022-4-14",
  },
  {
    id: uuid(),
    area: "Cayuga County",
    address: "23 Isle Lane, New Rochelle, NY 10538",
    city: "New Rochelle",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/6.jpg",
    type: "Multi Family",

    beds: 3,
    baths: 2,
    price: 7650,
    startDate: "2022-8-30",
  },
  {
    id: uuid(),
    area: "The Bronx",
    address: "95 Vernon ave, Scarsdale, NY 10538",
    city: "Scarsdale",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/7.jpg",
    type: "Studio",

    beds: 1,
    baths: 1,
    price: 2150,
    startDate: "2022-9-1",
  },
  {
    id: uuid(),
    area: "The Bronx",
    address: "321 Munday Lane, Eastchester, NY 10606",
    city: "Eastchester",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/8.jpg",
    type: "Multi Family",

    beds: 3,
    baths: 1,
    price: 8450,
    startDate: "2022-10-31",
  },
  {
    id: uuid(),
    area: "Chenango County",
    address: "123 Ducksworth Way, New Rochelle, NY 10535",
    city: "New Rochelle",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/9.jpg",
    type: "Single Family",

    beds: 2,
    baths: 1,
    price: 6500,
    startDate: "2022-12-25",
  },
  {
    id: uuid(),
    area: "Chenango County",
    address: "6 Garth rd, Scarsdale, NY 10583",
    city: "Scarsdale",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/1.jpg",
    type: "Duplex",
    beds: 3,
    baths: 1,
    price: 2950,
    startDate: "2022-8-14",
  },
  {
    id: uuid(),
    area: "Broom County",
    address: "39 Sterling ave, White Plains, NY 10606",
    city: "White Plains",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/2.jpg",
    type: "Condo",
    beds: 2,
    baths: 2,
    price: 5450,
    startDate: "2022-9-14",
  },
  {
    id: uuid(),
    area: "Broom County",
    address: "62 Highland St, Eastchester, NY 10608",
    city: "Eastchester",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/3.jpg",
    type: "Single Family",

    beds: 4,
    baths: 1,
    price: 4250,
    startDate: "2022-5-14",
  },
  {
    id: uuid(),
    area: "Clinton County",
    address: "33 Alden Pl, Bronxville, NY 10708",
    city: "Bronxville",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/4.jpg",
    type: "Townhouse",

    beds: 3,
    baths: 1,
    price: 6950,
    startDate: "2022-3-14",
  },
  {
    id: uuid(),
    area: "Clinton County",
    address: "261 California rd, Mamaroneck, NY 10612",
    city: "Mamaroneck",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/5.jpg",
    type: "Studio",
    beds: 1,
    baths: 1,
    price: 4550,
    startDate: "2022-4-14",
  },
  {
    id: uuid(),
    area: "Brooklyn",
    address: "23 Isle Lane, New Rochelle, NY 10538",
    city: "New Rochelle",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/6.jpg",
    type: "Multi Family",

    beds: 3,
    baths: 2,
    price: 9550,
    startDate: "2022-8-30",
  },
  {
    id: uuid(),
    area: "Brooklyn",
    address: "95 Vernon ave, Scarsdale, NY 10538",
    city: "Scarsdale",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/7.jpg",
    type: "Studio",

    beds: 1,
    baths: 1,
    price: 7000,
    startDate: "2022-9-1",
  },
  {
    id: uuid(),
    area: "Chemung County",
    address: "321 Munday Lane, Eastchester, NY 10606",
    city: "Eastchester",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/8.jpg",
    type: "Multi Family",

    beds: 3,
    baths: 1,
    price: 7850,
    startDate: "2022-10-31",
  },
  {
    id: uuid(),
    area: "Chemung County",
    address: "123 Ducksworth Way, New Rochelle, NY 10535",
    city: "New Rochelle",
    image:
      "https://raw.githubusercontent.com/BrianQMclaren/real-estate/master/public/img/property/9.jpg",
    type: "Single Family",

    beds: 2,
    baths: 1,
    price: 4000,
    startDate: "2022-12-25",
  },
];

export default estate_data;
