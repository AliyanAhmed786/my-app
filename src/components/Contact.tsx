'use client'

import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight } from '../../utils/motion'
import Link from 'next/link'

export default function Contact() {
  return (
    <motion.section
        id='contact'
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center mb-32 z-[20] w-full"
    >
      <div className="min-h-screen mb-10 text-white p-8">
        <div className="max-w-2xl mx-auto relative">
          <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
            Contact Me
          </h1>

          <p className="text-xl mb-8">
            Contact me directly at
            <Link
              href="mailto:e.aliyan2001@gmail.com"
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 hover:underline"
            > e.aliyan2001@gmail.com </Link>
            or through this form.
          </p>

          <form className="z-50 space-y-6">
            <div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-4 bg-transparent rounded-lg border border-[white] placeholder-white text-white text-lg focus:outline-none"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your message"
                rows={8}
                className="w-full p-4 bg-transparent rounded-lg border border-[white] placeholder-white text-white text-lg focus:outline-none"
              />
            </div>

            {/* Align the button properly inside the form */}
            <div className="flex mt-8">
              <motion.button
                type="submit"
                variants={slideInFromLeft(1.5)}
                className="py-2 button-primary text-center text-white z-40 cursor-pointer rounded-lg w-24 max-w-[200px]"
              >
                Submit
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </motion.section>
  )
}
