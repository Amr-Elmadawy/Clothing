import React, { useEffect, useState } from "react";
import BannerImg from "../../assets/banner.jpg";

const Banner = () => {
  const initialTime = 5 * 60 * 60;
  const [timeLeft, setTimeLeft] = useState(() => {
    const storeTime = localStorage.getItem("remainingTime");
    return storeTime && parseInt(storeTime, 10) > 0
      ? parseInt(storeTime, 10)
      : initialTime;
  });
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: String(hours).padStart(2, "0"),
      minutes: String(minutes).padStart(2, "0"),
      seconds: String(seconds).padStart(2, "0"),
    };
  };
  const { hours, minutes, seconds } = formatTime(timeLeft);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          localStorage.setItem("remainingTime", 0);
          return 0;
        }
        const remainingTime = prev - 1;
        localStorage.setItem("remainingTime", remainingTime);
        return remainingTime;
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [timeLeft]);
  return (
    <section
      className={`mt-[15vh] md:h-[60vh] h-[50vh]  bg-cover md:px-0 px-5 `}
      style={{
        backgroundImage:
          window.innerWidth >= 768 ? `url(${BannerImg})` : "none",
      }}
    >
      <div className="max-w-325 mx-auto flex flex-col gap-5">
        <h1 className="md:text-9xl text-6xl font-bold uppercase text-red-600 mt-10">
          big sale!
        </h1>
        <h2 className="text-3xl text-zinc-800 ">
          Up To 50% OFF - Limited Time Only
        </h2>
        <h3 className="font-bold md:text-6xl text-3xl tracking-tight flex gap-3 ">
          <span className="bg-zinc-800 text-white p-2">{hours}</span>:
          <span className="bg-zinc-800 text-white p-2  ">{minutes}</span>:
          <span className="bg-zinc-800 text-white p-2  ">{seconds}</span>
        </h3>
      </div>
    </section>
  );
};

export default Banner;
