import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="adhkar_page"
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <h2 className="mb-6 text-2xl font-semibold text-black dark:text-white">
        Time For Morning Adhkar
      </h2>
      <div className="adhkar_box mb-3 p-5 bg-[#959595] dark:bg-[#2c2c2c] w-100 h-100 rounded-2xl flex flex-col items-center justify-center gap-3">
        <div className="info w-full flex items-center justify-between text-black dark:text-white">
          <h5>count: 0</h5>
          <h5>progress: 12/16</h5>
        </div>
        <div className="content w-full h-full p-6 bg-[#787878] dark:bg-[#525252] flex items-center justify-center text-center rounded-2xl">
          <h4 className="text-2xl font-semibold text-black dark:text-white">
            لَا إِلٰهَ إِلاَّ اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ
            وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيءٍ قَدِيرٌ 
          </h4>
        </div>
      </div>
      <div className="controls w-30 flex items-center justify-between text-black dark:text-white">
        <ChevronLeft
          size={50}
          className="bg-neutral-600 p-2 rounded-full flex items-center justify-center"
        />
        <ChevronRight
          size={50}
          className="bg-neutral-600 p-2 rounded-full flex items-center justify-center"
        />
      </div>
    </section>
  );
}
