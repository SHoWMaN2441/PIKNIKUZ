import Image from "next/image";
import Blogmax from "../_components/Blogmax";

const page = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl text-center font-bold mb-4">
          Sayohat va Lager Blogi
        </h1>
        <p className="text-center text-xs text-slate-400 max-w-[550px] mx-auto mb-8">
          Sayohatni sevuvchilar uchun qiziqarli hikoyalar, foydali maslahatlar
          va lager hayoti haqida ko‘rsatmalar. Tabiatga yaqin bo‘lish va
          sayohatlaringizni unutilmas qilish uchun o‘z bilimlaringizni boyiting!
        </p>
        <div className="flex flex-wrap  gap-4 justify-center items-center">
          <Blogmax />
          <Blogmax />
          <Blogmax />
          <Blogmax />
          <Blogmax />
          <Blogmax />
          <Blogmax />
          <Blogmax />
          <Blogmax />
        </div>
      </div>
    </div>
  );
};

export default page;
