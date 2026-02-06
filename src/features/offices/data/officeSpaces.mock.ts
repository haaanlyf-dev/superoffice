import { OfficeSpace } from "../types/officeSpace.types";

export const officeSpaces: OfficeSpace[] = [
    {
        id: 1,
        title: "Go Work Jakarta",
        slug: "go-work-jakarta",
        price: 19000000,
        duration: "20 days",
        address: "Dekat Stasiun MRT Setiabudi",
        location: "Jakarta Pusat",
        rating: 4.5,
        image: "/assets/images/thumbnails/thumbnails-1.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
        ],
        tags: ["Popular"],
        about:
            "Wheter you need quite place to focus or a collaborative space to brainstorm with your team, our office spaces are designed to meet your needs. With high-speed internet, modern furnishings, and access to meeting rooms, you'll have everything you need to be productive.",
        features: [
            "Global Events",
            "Privacy",
            "Sustainbility",
            "Extra Snacks",
            "Compact",
            "Free Move"
        ],  
        salesContacts: [
            {
                name: "Sarah Johnson",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Michael Lee",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-2.png",
            },
        ], 
        isFullyBooked: true,
    },
    {
        id: 2,
        title: "Hotel Batu Business Center Premium Office Space",
        slug: "hotel-batu-business-center-premium-office-space",
        price: 2000000,
        duration: "30 days",
        address: "Dekat Stasiun Surabaya Kota",
        location: "Surabaya",
        rating: 4.9,
        image: "/assets/images/thumbnails/thumbnails-2.png",
        images: [
            "/assets/images/thumbnails/thumbnail-details-2.png",
            "/assets/images/thumbnails/thumbnail-details-3.png",
        ],
        tags: ["Popular", "Cheaper", "Recommended"],
        about:
            "Wheter you need quite place to focus or a collaborative space to brainstorm with your team, our office spaces are designed to meet your needs. With high-speed internet, modern furnishings, and access to meeting rooms, you'll have everything you need to be productive.",
        features: [
            "Global Events",
            "Privacy",
            "Sustainbility",
            "Extra Snacks",
        ],  
        salesContacts: [
            {
                name: "Surya 12",
                role: "Sales Manager",
                photo: "/assets/images/photos/photo-1.png",
            },
            {
                name: "Rina Maya",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-2.png",
            },
            {
                name: "Ikuzo Tanaka",
                role: "Sales Executive",
                photo: "/assets/images/photos/photo-2.png",
            },
        ], 
        isFullyBooked: false,
    },
]