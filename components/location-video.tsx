"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export default function LocationVideo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { t } = useLanguage()

  // For now, we'll create a placeholder component
  // When you have the video file, you can place it in the public folder and update the path
  const videoPath = "/location-instructions.mp4" // Update this with your actual video file name

  const handlePlayVideo = () => {
    setIsPlaying(true)
  }

  return (
    <section className="w-full px-4 sm:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/50 backdrop-blur-sm border border-white/30 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-serif text-gray-800 mb-3">
              Location Instructions
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Watch this video for detailed directions to Beau Jardin
            </p>
          </div>

          <div className="relative aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
            >
              <source src={videoPath} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact us for additional directions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
