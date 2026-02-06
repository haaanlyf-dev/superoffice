import { match } from "assert";
import Image from "next/image";

const FEATURE_MAP = [
  {
    label: "Global Events",
    description: " High-speed internet to keep you connected",
    icon: "/assets/images/icons/3dcube.svg",
  },
  {
    label: "Sustainbility",
    description: " High-speed internet to keep you connected",
    icon: "/assets/images/icons/3dcube.svg",
  },
  {
    label: "Extra Snacks",
    description: " High-speed internet to keep you connected",
    icon: "/assets/images/icons/coffee.svg",
  },

  // {
  //     label: "Privacy",
  //     description:" High-speed internet to keep you connected",
  //     icon:"/assets/images/icons/3dcube.svg",
  // },
  // {
  //     label: "Compact",
  //     description:" High-speed internet to keep you connected",
  //     icon:"/assets/images/icons/3dcube.svg",
  // },
  // {
  //     label: "Free Move"
  //     description:" High-speed internet to keep you connected",
  //     icon:"/assets/images/icons/3dcube.svg",
  // }
];

export default function OfficeFeature({ features }: { features: string[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-5 gap-y-[30px]">
      {features.map((feature) => {
        const matched  = FEATURE_MAP.find((f) => f.label === feature);

        if (!matched) return null;

        return (
          <div key={feature} className="flex items-center gap-4">
            <Image
              width={34}
              height={34}
              src={matched.icon}
              alt={`${matched.label} icon`}
            />
            <div className="flex flex-col gap-[2px]">
              <p className="font-bold text-lg leading-[24px]">{matched.label}</p>
              <p className="text-sm leading-[21px]">{matched.description} </p>
            </div>  
          </div>
        );
      })}
    </div>
  );
}
