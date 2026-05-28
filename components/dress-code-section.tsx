"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function DressCodeSection() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="relative py-20 px-4 md:py-32 overflow-visible"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl text-center"
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              {t('dressCode')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-orange-300 mx-auto"></div>
          </div>

          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed"
            >
              {t('dressCodeText')}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
