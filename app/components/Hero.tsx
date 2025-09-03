"use client";

import { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";

const morning_adhkars = [
  {
    id: 1,
    text: "لَا إِلٰهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيءٍ قَدِيرٌ",
    repeat: 5,
  },
  {
    id: 2,
    text: "سُبْحَانَ اللهِ وَبِحَمْدِهِ",
    repeat: 33,
  },
  {
    id: 3,
    text: "سُبْحَانَ اللهِ الْعَظِيمِ",
    repeat: 10,
  },
  {
    id: 4,
    text: "اللَّهُمَّ اغْفِرْ لِي",
    repeat: 3,
  },
  {
    id: 5,
    text: "اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ",
    repeat: 1,
  },
  {
    id: 6,
    text: "أَسْتَغْفِرُ اللهَ",
    repeat: 100,
  },
  {
    id: 7,
    text: "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ",
    repeat: 10,
  },
  {
    id: 8,
    text: "سُبْحَانَ اللهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلٰهَ إِلَّا اللهُ، وَاللهُ أَكْبَرُ",
    repeat: 25,
  },
  {
    id: 9,
    text: "اللَّهُ أَكْبَرُ كَبِيرًا",
    repeat: 3,
  },
  {
    id: 10,
    text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    repeat: 7,
  },
  {
    id: 11,
    text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ",
    repeat: 10,
  },
  {
    id: 12,
    text: "اللَّهُمَّ بَارِكْ لِي فِي رِزْقِي",
    repeat: 3,
  },
  {
    id: 13,
    text: "اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ",
    repeat: 3,
  },
  {
    id: 14,
    text: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
    repeat: 1,
  },
  {
    id: 15,
    text: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
    repeat: 1,
  },
  {
    id: 16,
    text: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
    repeat: 7,
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setCount(0);
    }
  };
  const handleNext = () => {
    if (currentIndex < morning_adhkars.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setCount(0);
    }
  };
  const handleCount = () => {
    if (count < morning_adhkars[currentIndex].repeat) {
      setCount(count + 1);
    }
    if (count + 1 === morning_adhkars[currentIndex].repeat) {
      if (currentIndex < morning_adhkars.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setCount(0);
      }
    }
  };

  return (
    <section
      id="adhkar_page"
      className="w-full h-full flex flex-col items-center justify-center select-none"
    >
      <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
        Time For Morning Adhkar
      </h2>
      <div className="adhkar_box mb-3 p-5 bg-[#959595] dark:bg-[#2c2c2c] w-100 h-100 rounded-2xl flex flex-col items-center justify-center gap-3">
        <div className="info w-full flex items-center justify-between text-black dark:text-white">
          <h5>count: {count}</h5>
          <h5>
            progress: {currentIndex + 1}/{morning_adhkars.length}
          </h5>
        </div>
        <div
          className="content w-full h-full p-6 bg-[#787878] dark:bg-[#525252] flex flex-col items-center justify-center text-center rounded-2xl"
          onClick={handleCount}
        >
          <span className="text-black dark:text-white mb-12">
            {morning_adhkars[currentIndex].repeat} times
          </span>
          <h4 className="text-2xl font-semibold text-black dark:text-white">
            {morning_adhkars[currentIndex].text}
          </h4>
        </div>
      </div>
      <div className="controls w-30 flex items-center justify-between text-black dark:text-white">
        <ChevronLeft
          size={50}
          className="bg-neutral-600 p-2 rounded-full flex items-center justify-center"
          onClick={handlePrev}
        />
        <ChevronRight
          size={50}
          className="bg-neutral-600 p-2 rounded-full flex items-center justify-center"
          onClick={handleNext}
        />
      </div>
    </section>
  );
}
