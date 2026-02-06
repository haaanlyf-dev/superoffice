export type OfficeSpace = {
    id: number;
    title: string;
    slug: string;
    price: number;
    duration: string;
    address: string;
    about: string;
    location: string;
    rating: number;
    tags: string[];
    image: string;
    images: string[];
    features: string[];
    salesContacts: SalesContact[]; //setiap office space memiliki beberapa sales contact , menggunakan array berarti banyak / lebih dari 1
    isFullyBooked: boolean; //untuk mengecek apakah penuh atau tidak
};

export type SalesContact = {
    name: string;
    role: string;
    photo: string;
};

export type Contact = {
    name: string;
    role: string;
    photo: string;
}