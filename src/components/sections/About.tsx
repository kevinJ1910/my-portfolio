'use client'

import { useState, useEffect, useRef } from "react"
import { Bot } from "lucide-react"
import { aboutData } from "@/data/aboutData"
import { motion, AnimatePresence } from "motion/react"

export default function About() {
  // Chatbot State
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: 'Hello! I’m Kevin’s assistant. What would you like to know about him?'}
  ])

  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  // Handle question
  const handleQuestion = (q: string, a: string) => {
    setMessages((prev) => [...prev, { role: 'user', text: q }])
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: a }])
    }, 600)
  }

  return (
    <section id="about" className="py-24 relative">
      {/* Chatbot */}
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {/* Title */}
              <h2 className="text-4xl font-display font-bold mb-8">{aboutData.title}</h2>
              {/* Bio */}
              <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>{aboutData.bio}</p>
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {aboutData.stats.map((stat, i) => (
                    <div key={i} className="glass-card p-4 rounded-2xl">
                      <h4 className="text-center font-bold text-slate-900 dark:text-white text-sm ">{stat.label}</h4>
                      <h4 className="text-center text-2xl text-teal-500 text- font-bold mt-1">{stat.value}</h4>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Chatbot */}
              <div className="glass rounded-[2.5rem] p-8 border-white/40 dark:border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-teal-500 to-blue-500" />
                
                {/* Chatbot Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/20">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white">KevinBot</h3>
                    <p className="text-xs text-teal-500 font-bold">Online</p>
                  </div>
                </div>

                {/* Chatbot Messages */}
                <div
                  ref={scrollRef}
                  className="h-[300px] overflow-y-auto mb-6 space-y-4 pr-2 no-scrollbar"
                >
                  <AnimatePresence mode="popLayout">
                    {messages.map((msg, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] rounded-2xl p-4 text-sm ${msg.role === 'user'
                          ? 'bg-teal-500 text-white rounded-tr-none'
                          : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700'
                          }`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Chatbot Questions */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-slate-400 ml-1 mb-2 uppercase tracking-wider">Suggested questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {aboutData.chatbot.suggestedQuestions.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuestion(item.q, item.a)}
                        className="text-xs cursor-pointer font-semibold px-4 py-2 rounded-xl bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-100 dark:border-teal-500/20 hover:bg-teal-100 dark:hover:bg-teal-500/20 hover:scale-105 transition-all"
                      >
                        {item.q}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
    </section>
  )
}