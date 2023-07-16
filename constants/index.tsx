import {
  HomeIcon,
  PhoneIcon,
  ArrowDownOnSquareStackIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";

export const SidebarLinks = [
  {
    id: "home",
    title: "Αρχική",
    urlLink: "/dashboard",
    icon: <HomeIcon className="w-5 h-5" />,
    action: false,
    actionLink: "/",
    actionIcon: "",
  },
  {
    id: "calls",
    title: "Κλήσεις",
    urlLink: "/calls",
    icon: <PhoneIcon className="w-5 h-5" />,
    action: true,
    actionLink: "/calls/new",
    actionIcon: <PlusCircleIcon className="w-5 h-5" />,
  },
  {
    id: "intakes",
    title: "Intakes",
    urlLink: "/intakes",
    icon: <ArrowDownOnSquareStackIcon className="w-5 h-5" />,
    action: true,
    actionLink: "/intakes/new",
    actionIcon: <PlusCircleIcon className="w-5 h-5" />,
  },
];
