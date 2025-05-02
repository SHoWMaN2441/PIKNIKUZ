import Image from "next/image";

const Blogmax = () => {
  return (
    <div className="max-w-[380px] mt-[50px] md:mt-[90px] relative">
      <Image
        className="absolute top-[90px] left-[140px]"
        src="/circle.png"
        alt="blog"
        width={80}
        height={80}
      ></Image>
      <Image src="/ORQAFON.png" alt="blog" width={380} height={250}></Image>
      <p
        className="max-w-[380px] mx-auto p-2
           text-[18px] font-bold mt-1"
      >
        Tabiatning Qiziqarli Jihatlari: Sarg‘aygan Amazon O‘rmonlari Haqida
        Qiziqarli Faktlar
      </p>
      <div className="relative max-w-[177px] border-1 h-[30px] rounded-[20px] text-[11px] flex items-center justify-center">
        <p
          className="absolute top-[7px]
            "
        >
          Payshanba, 2024-yil 8-yanvar
        </p>
      </div>
    </div>
  );
};

export default Blogmax;
