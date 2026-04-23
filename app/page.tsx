"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function App() {
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState("");
  const [hearts, setHearts] = useState<any[]>([]);

  const correctPassword = "GAMMI";

  useEffect(() => {
    const arr = Array.from({ length: 10 }).map(() => ({
      x: Math.random() * 100,
      duration: 6 + Math.random() * 4,
    }));
    setHearts(arr);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400 relative overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((h, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-400 text-xl"
            initial={{ y: "100%", x: `${h.x}%` }}
            animate={{ y: "-10%" }}
            transition={{ duration: h.duration, repeat: Infinity }}
          >
            ❤️
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={step}>
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

          {/* STEPS 1–7 */}
          {step !== 0 && step < 8 && (
            <Card className="w-[95vw] max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-4xl h-[75vh] rounded-[40px] shadow-2xl flex items-center justify-center">
              <CardContent className="text-center p-6 w-full">
                {step === 1 && (
                  <>
                    <h1 className="text-2xl mb-6">Do you want to see? 💖</h1>
                    <Button className="w-full mb-3" onClick={() => setStep(3)}>
                      Yes
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setStep(2)}
                    >
                      No
                    </Button>
                  </>
                )}

                {step === 2 && (
                  <>
                    <h1 className="text-red-500 text-xl mb-4">
                      How dare you 😡
                    </h1>
                    <Button onClick={() => setStep(1)}>Go back</Button>
                  </>
                )}

                {step === 3 && (
                  <>
                    <h1 className="text-xl mb-4">That’s a good girl 💖</h1>
                    <Button onClick={() => setStep(4)}>Click</Button>
                  </>
                )}

                {step === 4 && (
                  <>
                    <h1 className="text-2xl mb-4">🎉</h1>
                    <p className="text-lg">
                      🎉 Happy Birthday Garima ❤️ You are not just special to
                      me… you are everything 💖 You are my favorite
                      notification, my safest place, and the reason behind my
                      happiest smiles 😊✨ Every moment with you feels like a
                      beautiful memory I never want to end 💫 Stay cute, stay
                      happy, stay shining like you always do 🌸 Because the
                      world is better with you in it 💕 I love you more than
                      words can ever express ❤️✨
                    </p>
                    <Button className="mt-6" onClick={() => setStep(5)}>
                      Next
                    </Button>
                  </>
                )}

                {step === 5 && (
                  <>
                    <h2 className="mb-4">Tap Gift 🎁</h2>
                    <motion.div
                      className="w-32 h-32 bg-pink-400 rounded-xl flex items-center justify-center text-4xl mx-auto"
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setStep(6)}
                    >
                      🎁
                    </motion.div>
                  </>
                )}

                {step === 6 && (
                  <div className="flex flex-col items-center justify-center w-full px-4 text-center">
                    {/* IMAGE TRANSITION */}
                    <motion.div
                      className="relative mb-6"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      {/* Childhood Image */}
                      <motion.img
                        src="/childhood.png"
                        alt="childhood"
                        className="
          absolute top-0 left-0
          w-32 h-40 sm:w-36 sm:h-44 md:w-44 md:h-56
          object-cover rounded-xl shadow-xl
        "
                        initial={{ opacity: 1, scale: 1 }}
                        animate={{ opacity: 0, scale: 1.05 }}
                        transition={{ delay: 2, duration: 1.6 }}
                      />

                      {/* Current Image */}
                      <motion.img
                        src="/IMG5.png"
                        alt="now"
                        className="
          w-32 h-40 sm:w-36 sm:h-44 md:w-44 md:h-56
          object-cover rounded-xl shadow-xl
        "
                        initial={{ opacity: 0, scale: 1.15 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 1.6 }}
                      />
                    </motion.div>

                    {/* TEXT REVEAL (SLOWER + STORY-LIKE) */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xs sm:max-w-sm md:max-w-md"
                    >
                      From this little smile… 💖
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 2.4 }}
                      className="text-base sm:text-lg md:text-xl leading-relaxed mt-2"
                    >
                      to the beautiful person you are today ✨
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 3.8 }}
                      className="text-base sm:text-lg md:text-xl leading-relaxed mt-2"
                    >
                      You’ve always been my favorite 💕
                    </motion.p>

                    {/* BUTTON (LAST APPEAR) */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 5 }}
                      className="w-full flex justify-center"
                    >
                      <Button
                        className="mt-6 w-[80%] sm:w-auto rounded-full px-6 py-5 text-lg"
                        onClick={() => setStep(7)}
                      >
                        Next 💖
                      </Button>
                    </motion.div>
                  </div>
                )}
                {step === 7 && (
                  <>
                    {/* Rope (only for PC) */}
                    <div className="hidden md:flex relative w-full justify-center mb-8">
                      <div className="absolute top-6 w-[80%] h-[2px] bg-gray-400" />
                    </div>

                    {/* MOBILE (2x2 GRID) */}
                    <div className="grid grid-cols-2 gap-5 w-full px-4 md:hidden">
                      {["/IMG1.png", "/IMG2.png", "/IMG3.png", "/IMG4.png"].map(
                        (img, i) => (
                          <div key={i} className="flex justify-center">
                            <div className="bg-white p-2 rounded-xl shadow-md">
                              <img
                                src={img}
                                className="w-36 h-44 object-cover rounded-md"
                              />
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {/* PC (HANGING POLAROID - SAME AS BEFORE) */}
                    <div className="hidden md:flex flex-col items-center gap-12">
                      {["/IMG1.png", "/IMG2.png", "/IMG3.png", "/IMG4.png"].map(
                        (img, i) => {
                          const rotation =
                            i % 2 === 0 ? "rotate-[-6deg]" : "rotate-[6deg]";

                          return (
                            <motion.div
                              key={i}
                              className="flex flex-col items-center"
                              initial={{ y: -60, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: i * 0.2 }}
                            >
                              {/* Pin */}
                              <div className="w-3 h-3 bg-gray-500 rounded-full mb-1" />

                              {/* String */}
                              <div className="w-[2px] h-8 bg-gray-400 mb-2" />

                              {/* Polaroid */}
                              <div
                                className={`bg-white p-3 rounded-xl shadow-xl ${rotation}`}
                              >
                                <img
                                  src={img}
                                  className="w-48 h-64 object-cover rounded-md"
                                />
                              </div>
                            </motion.div>
                          );
                        }
                      )}
                    </div>

                    {/* Text */}
                    <h2 className="text-lg md:text-2xl text-pink-600 mt-6">
                      I LOVE YOU ❤️
                    </h2>

                    {/* Button */}
                    <div className="mt-4 w-full flex justify-center">
                      <Button
                        className="w-[80%] md:w-auto rounded-full py-5 text-lg"
                        onClick={() => setStep(8)}
                      >
                        Next ❤️
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* STEP 8 */}
          {step === 8 && (
            <motion.div className="w-[95vw] max-w-4xl h-[85vh] rounded-[40px] overflow-hidden relative shadow-2xl">
              <video
                src="/pp.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-4xl text-white mb-4">Here’s a hug 🤗</h1>
                <p className="text-white text-lg">
                  I’ll always be there for you 💖
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
