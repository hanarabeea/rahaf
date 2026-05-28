"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function CeremonySection() {
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
          className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-3xl p-8 md:p-10 shadow-2xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
              {t('katbKetab')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-orange-300 mx-auto"></div>
          </div>

          <div className="text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-300 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-xl text-pink-600 font-medium mb-4">
                {t('katbKetabTime')}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-gray-600 text-lg leading-relaxed mb-2">
                {t('katbKetabDescription')}
              </p>
            </div>

            <div className="flex justify-center space-x-2 text-2xl text-gray-600">
              <span>Ceremony</span>
              <span>•</span>
              <span>Union</span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
