'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface SuccessMessageProps {
  isVisible: boolean
}

export default function SuccessMessage({ isVisible }: SuccessMessageProps) {
  const messageVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.3
      }
    }
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        delay: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="bg-green-50 border border-green-200 rounded-md p-4 mb-6"
          variants={messageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="flex">
            <div className="flex-shrink-0">
              <motion.svg
                className="h-5 w-5 text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                variants={iconVariants}
                initial="hidden"
                animate="visible"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </motion.svg>
            </div>
            <div className="ml-3">
              <motion.p 
                className="text-sm font-medium text-green-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Application submitted successfully!
              </motion.p>
              <motion.p 
                className="mt-1 text-sm text-green-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Our recruitment team will contact you within 24 hours to discuss opportunities that match your skills and preferences.
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
