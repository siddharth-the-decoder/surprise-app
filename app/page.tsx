"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState("");
  const [openGift, setOpenGift] = useState(false);
  const [typedText, setTypedText] = useState("");

  const name = "Garima ❤️";
  const correctPassword = "1234";

  const fullText = `Happy Birthday Garima ❤️  
  You mean more to me than words can ever express 💖  
  Every moment with you feels special, and every memory with you is something I cherish deeply ✨  
  I just want you to know… no matter what, I’ll always be there for you 💕  
  Stay happy, stay mine ❤️`;

  useEffect(() => {
    if (step === 4) {
      let i = 0;
      const interval = setInterval(() => {
        setTypedText(fullText.slice(0, i));
        i++;
        if (i > fullText.length) clearInterval(interval);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [step]);

  const container =
    "h-screen w-screen flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-200 to-pink-400";

  const card =
    "w-[90%] max-w-sm h-[80vh] flex flex-col justify-center items-center bg-white rounded-3xl shadow-2xl p-6 text-center";

  const btn =
    "bg-pink-500 active:scale-95 text-white px-6 py-3 rounded-full mt-4 w-full text-lg font-semibold";

  const input =
    "border border-gray-400 p-3 rounded-xl w-full text-center text-lg mb-4 text-black placeholder-gray-500";

  const heading = "text-black text-2xl font-semibold mb-4";
  const text = "text-gray-700 text-lg";

  return (
    <div className={container}>
      <AnimatePresence mode="wait">
        {step === 0 && (
          <motion.div
            key="0"
            className={card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h2 className={heading}>Enter Password 💌</h2>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={input}
              placeholder="Enter password"
            />
            <button
              className={btn}
              onClick={() => password === correctPassword && setStep(1)}
            >
              Continue
            </button>
          </motion.div>
        )}

        {step === 1 && (
          <motion.div
            key="1"
            className={card}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h1 className={heading}>Do you want to see? 💖</h1>
            <button className={btn} onClick={() => setStep(3)}>
              Yes
            </button>
            <button className={btn} onClick={() => setStep(2)}>
              No
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div key="2" className={card}>
            <h1 className="text-red-500 text-2xl mb-4">How dare you 😡</h1>
            <button className={btn} onClick={() => setStep(1)}>
              Go back
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div key="3" className={card}>
            <h1 className={heading}>Good choice 😍</h1>
            <button className={btn} onClick={() => setStep(4)}>
              Click
            </button>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div key="4" className={card}>
            <h1 className="text-3xl text-pink-600 mb-4">🎉</h1>
            <p className={text + " min-h-[80px]"}>{typedText}</p>
            <div className="text-2xl mt-2">✨🎊💖🎉✨</div>
            <button className={btn} onClick={() => setStep(5)}>
              Next
            </button>
          </motion.div>
        )}

        {step === 5 && (
          <motion.div key="5" className={card}>
            <h2 className={heading}>Tap Gift 🎁</h2>
            <motion.div
              className="w-32 h-32 bg-pink-400 rounded-xl flex items-center justify-center mt-4 text-4xl"
              animate={openGift ? { rotate: 10, scale: 1.2 } : { rotate: 0 }}
              onClick={() => setOpenGift(true)}
            >
              🎁
            </motion.div>
            {openGift && (
              <button className={btn} onClick={() => setStep(6)}>
                Open
              </button>
            )}
          </motion.div>
        )}

        {step === 6 && (
          <motion.div key="6" className={card}>
            <p className={text}>
              You are the best thing in my life 💖 Stay happy always 🌸
            </p>
            <button className={btn} onClick={() => setStep(7)}>
              Next
            </button>
          </motion.div>
        )}

        {step === 7 && (
          <motion.div key="7" className={card}>
            <div className="flex gap-2">
              <img
                src="/img1.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <img
                src="/img2.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <img
                src="/img3.jpg"
                className="w-20 h-20 rounded-lg object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl text-pink-600 font-semibold">
              I LOVE YOU ❤️
            </h2>
            <button className={btn} onClick={() => setStep(8)}>
              Next
            </button>
          </motion.div>
        )}

        {step === 8 && (
          <motion.div key="8" className={card}>
            <h1 className={heading}>Here’s a hug 🤗</h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
