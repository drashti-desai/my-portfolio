"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+1 607 312 0031"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "drashtidesai51@gmail.com"
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "New York, USA"
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="">
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
        }}
        className="py-6"
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-amber-400">Contact Me</h3>
                <p>Feel Free to reach out to me for any questions or opportunities!</p>
                {/* input  */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="firstname" placeholder="First Name" />
                  <Input type="lastname" placeholder="Last Name" />
                  <Input type="email" placeholder="Email Address" />
                  <Input type="phone" placeholder="Phone number" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                  <Input type="subject" placeholder="Subject" />
                </div>
                {/* Textarea  */}
                <Textarea className="h-[200px]" placeholder="Type your message here."></Textarea>
                {/* Button  */}
                <div className="justify-center">
                  <Button size="md" className="max-w-40">Send Message</Button>
                </div>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => {
                  return (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-black[#27272c] text-amber-400 rounded-md flex items-center justify-center">
                        <div className="text-[28px]">{item.icon}</div>
                      </div>
                      <div className="flex-1">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Contact