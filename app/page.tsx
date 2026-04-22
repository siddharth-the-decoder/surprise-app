"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState("");

  const correctPassword = "1234";

  // 🔥 Auto transitions (reel style)
  useEffect(() => {
    if (step >= 4 && step < 8) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 relative overflow-hidden">
      {/* 💖 Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-xl"
            initial={{ y: "100%", x: Math.random() * 100 + "%" }}
            animate={{ y: "-10%" }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {/* 🔄 SWIPE WRAPPER */}
        <motion.div
          key={step}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -100) setStep((prev) => Math.min(prev + 1, 8));
            if (info.offset.x > 100) setStep((prev) => Math.max(prev - 1, 0));
          }}
        >
          {/* STEP 0 */}
          {step === 0 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <h2 className="text-xl mb-4">Enter Password 💌</h2>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border p-3 rounded-xl w-full mb-4"
                />
                <Button
                  className="w-full"
                  onClick={() => password === correctPassword && setStep(1)}
                >
                  Continue
                </Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <h1 className="text-xl mb-4">Do you want to see? 💖</h1>
                <Button className="w-full mb-2" onClick={() => setStep(3)}>
                  Yes
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setStep(2)}
                >
                  No
                </Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <h1 className="text-red-500 text-xl mb-4">How dare you 😡</h1>
                <Button onClick={() => setStep(1)}>Go back</Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <h1 className="text-xl mb-4">That’s a good girl 💖</h1>
                <Button onClick={() => setStep(4)}>Click</Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <h1 className="text-2xl text-pink-600 mb-4">🎉</h1>
                <p>
                  Happy Birthday Garima ❤️ You are my favorite notification 💖
                  Stay happy always 💕
                </p>
              </CardContent>
            </Card>
          )}

          {/* STEP 5 */}
          {step === 5 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <h2 className="mb-4">Tap Gift 🎁</h2>
                <motion.div
                  className="w-28 h-28 bg-pink-400 rounded-xl flex items-center justify-center text-4xl mx-auto"
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setStep(6)}
                >
                  🎁
                </motion.div>
              </CardContent>
            </Card>
          )}

          {/* STEP 6 */}
          {step === 6 && (
            <Card className="w-full max-w-md rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <p>You are the best thing in my life 💖</p>
              </CardContent>
            </Card>
          )}

          {/* STEP 7 - POLAROID */}
          {step === 7 && (
            <Card className="w-full max-w-2xl rounded-3xl shadow-2xl">
              <CardContent className="p-6 text-center">
                <div className="relative w-full flex justify-center mb-6">
                  <div className="absolute top-2 w-[90%] h-[2px] bg-gray-400"></div>

                  <div className="flex gap-4 mt-6 flex-wrap justify-center">
                    {["/IMG1.png", "/IMG2.png", "/IMG3.png", "/IMG4.png"].map(
                      (img, i) => (
                        <motion.div
                          key={i}
                          className="bg-white p-2 rounded-lg shadow-lg relative"
                          initial={{ y: -50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: i * 0.2 }}
                        >
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-sm"></div>
                          <img
                            src={img}
                            className="w-24 h-28 object-cover rounded-md"
                          />
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                <h2 className="text-xl text-pink-600 mt-4">I LOVE YOU ❤️</h2>

                <Button className="mt-4" onClick={() => setStep(8)}>
                  Next
                </Button>
              </CardContent>
            </Card>
          )}

          {/* STEP 8 - VIDEO */}
          {step === 8 && (
            <Card className="w-full max-w-2xl h-[80vh] overflow-hidden rounded-3xl relative">
              <video
                src="/pp.mp4"
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              <CardContent className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-3xl text-white mb-2">Here’s a hug 🤗</h1>
                <p className="text-white">I’ll always be there for you 💖</p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
