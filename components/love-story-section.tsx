"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function LoveStorySection() {
  const { t } = useLanguage()

  return (
    <motion.section
      className="relative py-20 px-4 md:py-32 overflow-visible bg-gradient-to-br from-pink-50 to-orange-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-gray-800 mb-6">
            {t('loveStory')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-300 to-orange-300 mx-auto mb-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl md:text-3xl font-light text-gray-700"
              >
                {t('loveStoryLine1')}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl font-light text-gray-700"
              >
                {t('loveStoryLine2')}
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-2xl md:text-3xl font-light text-gray-700"
              >
                {t('loveStoryLine3')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="py-6 border-t border-b border-gray-200"
            >
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-gray-600 italic">
                  {t('venueDescription')}
                </p>
                <p className="text-lg md:text-xl text-gray-600 italic">
                  {t('venueDescription2')}
                </p>
                <p className="text-lg md:text-xl text-gray-600 italic">
                  {t('venueDescription3')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="space-y-2 pt-6"
            >
              <p className="text-lg md:text-xl text-gray-600">
                {t('farewellNote')}
              </p>
              <p className="text-lg md:text-xl text-gray-600">
                {t('farewellNote2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-xl md:text-2xl font-serif text-gray-800 mb-2">
                {t('signature')}
              </p>
              <p className="text-xl md:text-2xl font-serif text-pink-600">
                {t('signature2')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
