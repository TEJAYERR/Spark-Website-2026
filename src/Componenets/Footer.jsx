import { BiPhone } from "react-icons/bi";
import { about, contact, NavLinks } from "../data";
import { BsThunderbolt, BsThunderboltFill } from "react-icons/bs";


const Footer = () => {
    
    return(
        <div className="flex flex-col text-white justify-center items-center w-full bg-black px-10 py-5">
            <div className="flex justify-around w-full text-orange-500 pt-10">
                <div className="w-1/4 flex flex-col gap-3">
                    About
                    <p className="text-sm font-sans text-white">{about.content}</p>
                </div>
                <div className="flex flex-col gap-3">
                    Quick Links
                    <ul className="text-sm font-sans flex flex-col gap-2 text-white">
                        {NavLinks.map((link) => (
                            <li key={link.name}><a href={link.path} className="hover:text-orange-500">{link.name}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="flex flex-col gap-3">
                    Contact
                    {
                        contact.map((contact) => (
                            <div key={contact.heading} className="text-sm text-white font-sans flex flex-col gap-1">
                                <p className="flex gap-2 items-center">
                                    {contact.imgHeading}{contact.heading}
                                </p>
                                {contact.coordinators.map((coordinator, index) => (
                                    <a key={index} className="" href={""}>{coordinator} <br /></a>
                                ))}
                                {contact.mails.map((mail, index) => (
                                    <a key={index} href={""} className="flex gap-2">{contact.mailHeadings}{mail}</a>
                                ))}
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-3 w-1/5">
                    Stay upadted
                    <div className="flex flex-col text-sm gap-2">
                        <input type="mail" placeholder="Enter your mail" className="border border-gray-700 placeholder:text-gray-600 p-2 font-sans rounded-md outline-none" />
                        <button type="submit" className="bg-orange-500 text-white p-2 rounded-md">Subscibe</button>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center gap-3 pt-10">
                <hr className="flex-1 h-px border-0 bg-gradient-to-r from-transparent via-white/60 to-transparent" />

                <div className="text-white/80">
                    <BsThunderboltFill color="darkorange" />
                </div>

                <hr className="flex-1 h-px border-0 bg-gradient-to-l from-transparent via-white/60 to-transparent" />
            </div>

            <div className="pt-10">
                terms and conditions
            </div>
        </div>
    )
}

export default Footer;