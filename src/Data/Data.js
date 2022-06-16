// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilMoneyWithdrawal, 
    UilUsdSquare,
} from "@iconscout/react-unicons"

// importing image from image folder
import img1 from '../imgs/img1.png'
import img2 from '../imgs/img2.png'
import img3 from '../imgs/img3.png'

// Sidebar Data

export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilEstate,
        heading: "Analytics",
    },
];


export const CardsData =[
    {
        title: 'Sales',
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series:[
            {
                name: "Sales",
                data: [31,40,28,51,42,109,100],
            },
        ],
    },

    {
        title: 'Revenue',
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7"
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series:[
            {
                name: "Revenue",
                data: [10,100,50,70,80,30,40],
            },
        ],
    },

    {
        title: 'Expenses',
        color: {
            backGround: "linear-gradient(180deg, #faa82c 0%, #facc78 100%)",
            boxShadow: "0px 10px 20px 0px #F9D59B"
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series:[
            {
                name: "Expenses",
                data: [10,25,15,30,12,15,20],
            },
        ],
    },


]


export const UpdatesData = [
    {
        img: img1,
        name: "Bala Subramanian",
        noti: " has ordered Apple smart phone 11 pro",
        time: "1 hours ago"
    },
    {
        img: img2,
        name: "Manjoj Sarvesh",
        noti: " has received Samsung tablet 8 series",
        time: " 30 minutes ago"
    },
    {
        img: img3,
        name: "Anu Priya",
        noti: " has ordered LG 55 inchs smart Tv UHD",
        time: "48 seconds ago"
    },
]