// contact-me/page.tsx
import ContactForm from '@/components/ContactForm'
import React from 'react'

const Page = () => {
  return (
    <div className="w-screen min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/contact bg.jpeg')",
          opacity: 0.4 // 40% opacity as requested
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content Container */}
      <div className="
          relative z-10
          w-full
          max-w-md
          sm:max-w-lg
          md:max-w-2xl
          lg:max-w-3xl
          xl:max-w-4xl

          /* height control */
          max-h-[90vh]            /* mobile & tablets */
          lg:max-h-[70vh]         /* smaller on laptops */
          overflow-y-auto

          bg-black/40 backdrop-blur-sm rounded-xl border border-white/30
          p-4 sm:p-6 md:p-8 lg:p-10
          shadow-2xl shadow-black/50
        "
      >
        <div className="relative w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Page
