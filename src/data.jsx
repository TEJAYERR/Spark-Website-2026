import { Code, Gamepad2, Lightbulb, Mail, Music, Phone } from "lucide-react"
import { PiPhone } from "react-icons/pi"



export const NavLinks = [
    {
        name : "Home",
        path : "/",
    },
    {
        name : "Events",
        path : "/events",
    },
    {
        name : "About",
        path : "/about",
    },
    {
        name : "Gallery",
        path : "/gallery",
    },
    {
        name : "Sponsers",
        path : "/sponsers",
    },
]

export const about = {
    content : "SPARK 2026 is the annual technical and cultural fest of SV College, Tirupati — where innovation meets imagination. Get ready for gaming, coding, and creativity!"
}

export const contact = [
    {
        imgHeading : <Phone width={16} color="darkorange" />,
        heading : "Student Coordinators",
        coordinators : [
            "Teja - 90143989269",
            "Teja - 90143989269",
            "Teja - 90143989269",
            "Teja - 90143989269",
        ],
        mailHeadings : <Mail width={16} color="darkorange" />,
        mails : [
            "sac@gmail.com",
        ]
    },
]

export const EventsCategoriesData = [
    {
        img : <Code />,
        name : "Technical Events",
        events : [
            "PPT Presentation",
            "Poster Presentation",
            "Quiz Programs",
            "Branch Related Events",
        ]
    },
    {
        img : <Gamepad2 />,
        name : "Sports Tournaments",
        events : [
            "PPT Presentation",
            "Poster Presentation",
            "Quiz Programs",
            "Branch Related Events",
        ]
    },
    {
        img : <Music />,
        name : "Cultural Programs",
        events : [
            "PPT Presentation",
            "Poster Presentation",
            "Quiz Programs",
            "Branch Related Events",
        ]
    },
    {
        img : <Lightbulb />,
        name : "Spotlight Events",
        events : [
            "PPT Presentation",
            "Poster Presentation",
            "Quiz Programs",
            "Branch Related Events",
        ]
    }
] 