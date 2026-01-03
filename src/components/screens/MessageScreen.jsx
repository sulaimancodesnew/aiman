"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import GradientButton from "../GradientButton"
import { ArrowRight } from "lucide-react";

export default function MessageScreen({ onNext }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="px-4 md:px-6 py-10 text-center">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 drop-shadow mb-6 leading-tight"
            >
                A Special Message
            </motion.h2>

            <div className="mx-auto relative w-full max-w-3xl flex justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className=" h-auto max-w-xl bg-gradient-to-br from-pink-200 via-pink-100 to-pink-50 rounded-2xl shadow-lg p-4 md:p-6 text-center"
                >
                    <p className="text-[#301733] text-base md:text-lg leading-relaxed overflow-y-auto max-h-[400px] pr-2">
                        Happy Birthday, PIU 🎂💖✨
                        I still remember the first time we talked at the freshers party. It was such a fun day and we all enjoyed a lot 😊
                        At that time, I never knew that you would become such a good friend of mine. You are really a nice person and very kind 💛
                        Just one small thing, don’t stay sad too much. You look really good when you smile 😊 You look better when you are happy, not when you are sad.
                        Today is your birthday, so enjoy a lot 🥳 Have fun, do masti, spend good time with your family and your partner 💫 Take care of yourself always.
                        If I ever hurt you by mistake, I am really sorry for that 🙏
                        Once again, happy birthday 🎈🎉
                        Stay happy and keep smiling always 😊✨
                    </p>
                </motion.div>
            </div>
        </div>
    )
}
