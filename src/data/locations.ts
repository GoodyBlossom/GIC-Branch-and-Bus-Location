// Static content for the Church Branch & Transport Locator.
// IMPORTANT: Only manually-provided data lives here. Do not auto-generate locations.

export type ServiceTime = {
  label: string;
  value: string;
};

export type Branch = {
  id: string;
  name: string;
  /** City / state grouping shown as the region header */
  region: string;
  /** Short location label shown on the card */
  location: string;
  scope: "Nigeria" | "International";
  serviceTimes?: ServiceTime[];
  /** Full street address (if available) */
  address?: string;
  /** Venue name (used when there's no formal address) */
  venue?: string;
  enquiries?: string[];
  /** Search string used for the embedded Google Map */
  mapQuery: string;
};

export const branches: Branch[] = [
  // ---------- NIGERIA · LAGOS ----------
  {
    id: "hq-goodland",
    name: "HQ – The Goodland",
    region: "Lagos",
    location: "Oworoshoki, Lagos",
    scope: "Nigeria",
    serviceTimes: [
      { label: "Sunday", value: "07:00AM · 08:45AM · 10:30AM" },
      { label: "Wednesday Midweek", value: "06:00PM" },
    ],
    address: "The Goodland, Ifako Bus Stop, Oworoshoki Expressway, Lagos",
    mapQuery: "The Goodland, Ifako Bus Stop, Oworoshoki Expressway, Lagos",
  },
  {
    id: "surulere",
    name: "Surulere Branch",
    region: "Lagos",
    location: "Surulere, Lagos",
    scope: "Nigeria",
    serviceTimes: [
      { label: "Sunday", value: "07:30AM · 09:30AM · 11:30AM" },
      { label: "Wednesday Midweek", value: "06:00PM" },
    ],
    address: "277 Babs Animashaun, Surulere, Lagos",
    mapQuery: "277 Babs Animashaun, Surulere, Lagos",
  },
  {
    id: "lekki",
    name: "Lekki Branch",
    region: "Lagos",
    location: "Lekki, Lagos",
    scope: "Nigeria",
    serviceTimes: [
      { label: "Sunday", value: "09:00AM" },
      { label: "Wednesday Midweek", value: "06:00PM" },
    ],
    address:
      "L'avenida Multipurpose Hall, Lakeview Park One, Opp. Ikota Shopping Complex after VGC",
    mapQuery: "Lakeview Park One, Ikota, Lekki, Lagos",
  },

  // ---------- NIGERIA · ABUJA ----------
  {
    id: "abuja",
    name: "Abuja Branch",
    region: "Abuja",
    location: "Wuse, Abuja",
    scope: "Nigeria",
    venue: "Decency Event Center, Accra Street, Wuse Zone 5, Abuja",
    enquiries: ["08068059584", "08068594949"],
    mapQuery: "Decency Event Center, Accra Street, Wuse Zone 5, Abuja",
  },

  // ---------- INTERNATIONAL · CANADA ----------
  {
    id: "hamilton",
    name: "Hamilton Center",
    region: "Canada",
    location: "Hamilton, Ontario, Canada",
    scope: "International",
    venue: "Courtyard Hotel, 1224 Upper James, Hamilton, Ontario, Canada L9C 3B1",
    mapQuery: "Courtyard Hotel, 1224 Upper James, Hamilton, Ontario, Canada L9C 3B1",
  },

  // ---------- INTERNATIONAL · USA (MARYLAND) ----------
  {
    id: "maryland",
    name: "Maryland Center",
    region: "USA (Maryland)",
    location: "Lanham, Maryland, USA",
    scope: "International",
    serviceTimes: [{ label: "Weekend Service", value: "04:00PM EST" }],
    address: "5900 Princess Garden Parkway, Suite 430, Lanham, MD 20706",
    mapQuery: "5900 Princess Garden Parkway, Suite 430, Lanham, MD 20706",
  },
];

// ---------- BUS TRANSPORT ----------
// Structure: State → Area → Bus Stop → Details.
// No transport pickup data was provided yet. Add entries below to populate the
// section — the UI renders automatically. Do NOT add fake/placeholder stops.

export type BusStop = {
  id: string;
  name: string; // landmark-based stop name
  area: string;
  managerName: string;
  phone: string;
  mapQuery: string;
};

export type TransportArea = {
  name: string;
  stops: BusStop[];
};

export type TransportState = {
  name: string;
  areas: TransportArea[];
};

export const transportStates: TransportState[] = [
  {
    name: "Lagos",
    areas: [
      {
        name: "Agbara / Oko Afo",
        stops: [
          {
            id: "lagos-agbara",
            name: "MRS Fuel Station",
            area: "Agbara / Oko Afo",
            managerName: "Ebenezer",
            phone: "09029277207",
            mapQuery: "MRS Fuel Station, Agbara, Lagos",
          },
        ],
      },
      {
        name: "Iyana Iba",
        stops: [
          {
            id: "lagos-iyana-iba",
            name: "Aratunmi Bus-Stop",
            area: "Iyana Iba",
            managerName: "Alex",
            phone: "08052863586",
            mapQuery: "Aratunmi Bus-Stop, Iyana Iba, Lagos",
          },
        ],
      },
      {
        name: "Isolo / Cele / Jakande Gate",
        stops: [
          {
            id: "lagos-isolo-cele-jakande",
            name: "Jakande (MRS Filling Station) & Cele Bus-Stop",
            area: "Isolo / Cele / Jakande Gate",
            managerName: "Temi",
            phone: "08133367072",
            mapQuery: "Jakande MRS Filling Station, Isolo, Lagos",
          },
        ],
      },
      {
        name: "Alagbole / Akute",
        stops: [
          {
            id: "lagos-alagbole-akute",
            name: "Four Square Gospel Church Junction, Akute",
            area: "Alagbole / Akute",
            managerName: "Michael",
            phone: "08135386750",
            mapQuery: "Four Square Gospel Church Junction, Akute, Lagos",
          },
        ],
      },
      {
        name: "Ogba / Iju-Ishaga",
        stops: [
          {
            id: "lagos-ogba-iju",
            name: "Beside BRT Park, Opposite County Estate, Agege",
            area: "Ogba / Iju-Ishaga",
            managerName: "Newton",
            phone: "08037671006",
            mapQuery: "BRT Park, Opposite County Estate, Agege, Lagos",
          },
        ],
      },
      {
        name: "Gbagada / New Garage",
        stops: [
          {
            id: "lagos-gbagada",
            name: "UBA Ifako / R-Jolad",
            area: "Gbagada / New Garage",
            managerName: "Tope",
            phone: "09075788256",
            mapQuery: "UBA Ifako, Gbagada, Lagos",
          },
        ],
      },
      {
        name: "Ayobo",
        stops: [
          {
            id: "lagos-ayobo",
            name: "23 Captain David Road, 8/9 Bus-Stop, Ayobo",
            area: "Ayobo",
            managerName: "Faith",
            phone: "08067028304",
            mapQuery: "23 Captain David Road, Ayobo, Lagos",
          },
        ],
      },
      {
        name: "Ikorodu",
        stops: [
          {
            id: "lagos-ikorodu",
            name: "Benson Bus-Stop, Beside Union Bank, Ikorodu Garage",
            area: "Ikorodu",
            managerName: "Abiodun",
            phone: "07031667710",
            mapQuery: "Benson Bus-Stop, Ikorodu Garage, Lagos",
          },
        ],
      },
      {
        name: "Alimosho / Iyana Ipaja",
        stops: [
          {
            id: "lagos-alimosho",
            name: "Iyana Ipaja Bus-Stop",
            area: "Alimosho / Iyana Ipaja",
            managerName: "Victoria",
            phone: "08136955641",
            mapQuery: "Iyana Ipaja Bus-Stop, Lagos",
          },
        ],
      },
      {
        name: "Mowe / Ibafo",
        stops: [
          {
            id: "lagos-mowe-ibafo",
            name: "Mowe AP Filling Station",
            area: "Mowe / Ibafo",
            managerName: "Blessing",
            phone: "08103879518",
            mapQuery: "Mowe AP Filling Station, Lagos",
          },
        ],
      },
      {
        name: "Unilag / Yabatech",
        stops: [
          {
            id: "lagos-unilag-yabatech",
            name: "Unilag Gate / Ilaje",
            area: "Unilag / Yabatech",
            managerName: "Munachi",
            phone: "08156670376",
            mapQuery: "Unilag Gate, Akoka, Lagos",
          },
        ],
      },
      {
        name: "Oworonshoki",
        stops: [
          {
            id: "lagos-oworonshoki",
            name: "First Bank, Oworonshoki Road",
            area: "Oworonshoki",
            managerName: "Esther",
            phone: "08184480272",
            mapQuery: "First Bank, Oworonshoki Road, Lagos",
          },
        ],
      },
      {
        name: "Irawo / Owode / Mile 12",
        stops: [
          {
            id: "lagos-irawo-mile12",
            name: "Irawo Bus-Stop / Mile 12",
            area: "Irawo / Owode / Mile 12",
            managerName: "Omolara",
            phone: "08065916534",
            mapQuery: "Irawo Bus-Stop, Mile 12, Lagos",
          },
        ],
      },
      {
        name: "Ketu / Alapere",
        stops: [
          {
            id: "lagos-ketu-alapere",
            name: "Tantalizer Eatery, Alapere",
            area: "Ketu / Alapere",
            managerName: "Emmanuel",
            phone: "08027209567",
            mapQuery: "Tantalizer Eatery, Alapere, Lagos",
          },
        ],
      },
      {
        name: "Berger",
        stops: [
          {
            id: "lagos-berger",
            name: "Berger Bus-Stop",
            area: "Berger",
            managerName: "Linus",
            phone: "07031838141",
            mapQuery: "Berger Bus-Stop, Lagos",
          },
        ],
      },
      {
        name: "Ifako / Yetunde Brown",
        stops: [
          {
            id: "lagos-ifako-yetunde",
            name: "UBA Ifako",
            area: "Ifako / Yetunde Brown",
            managerName: "Emmanuel",
            phone: "07038497025",
            mapQuery: "UBA Ifako, Lagos",
          },
        ],
      },
    ],
  },
];

// Helper: Google Maps embed URL (no API key required, no directions UI).
export const mapEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapLinkUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const socialLinks = {
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  youtube: "https://youtube.com",
};

export const churchName = "Global Impact Church";
