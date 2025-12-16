// function Hero() {
//     return (
//         <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
//             <div className="md:col-span-2 relative">
//                 <img
//                     src="https://source.unsplash.com/900x500/?news"
//                     className="rounded-xl"
//                 />
//                 <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow">
//                     <span className="text-red-600 text-sm font-semibold">FEATURED</span>
//                     <h2 className="text-xl font-bold">
//                         Global Summit Brings Leaders Together
//                     </h2>
//                 </div>
//             </div>
//             <div className="space-y-4">
//                 {[1, 2, 3].map((i) => (
//                     <div key={i} className="flex gap-4 bg-white p-3 rounded-xl shadow">
//                         <img
//                             src="https://source.unsplash.com/100x80/?politics"
//                             className="rounded-lg"
//                         />
//                         <p className="font-semibold">Breaking Political Update</p>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }


// export default Hero;






// import leaderImg from "../assets/leader.jpg";
// import politics1 from "../assets/politics1.jpg";
// import politics2 from "../assets/politics2.jpg";
// import politics3 from "../assets/politics3.jpg";

// function Hero() {
//   const sideNews = [
//     { id: 1, img: politics1, title: "Breaking Political Update" },
//     { id: 2, img: politics2, title: "Election Results Announced" },
//     { id: 3, img: politics3, title: "New Policy Shocks Nation" },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
      
//       {/* Main Hero Image */}
//       <div className="md:col-span-2 relative">
//         <img
//           src={leaderImg}
//           alt="Featured News"
//           className="rounded-xl w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
//         />

//         <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow max-w-[90%]">
//           <span className="text-red-600 text-sm font-semibold">
//             FEATURED
//           </span>
//           <h2 className="text-xl md:text-2xl font-bold mt-1">
//             Global Summit Brings Leaders Together
//           </h2>
//         </div>
//       </div>

//       {/* Side News Images */}
//       <div className="space-y-4">
//         {sideNews.map((item) => (
//           <div
//             key={item.id}
//             className="flex gap-4 bg-white p-3 rounded-xl shadow"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-24 h-20 object-cover rounded-lg"
//             />
//             <p className="font-semibold text-sm leading-snug">
//               {item.title}
//             </p>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// }

// export default Hero;










// import leaderImg from "../assets/leader.jpg";
// import politics1 from "../assets/politics1.jpg";
// import politics2 from "../assets/politics2.jpg";
// import politics3 from "../assets/politics3.jpg";
// import { useNavigate } from "react-router-dom";

// function Hero() {
//   const navigate = useNavigate();

//   const sideNews = [
//     {
//       id: 1,
//       img: politics1,
//       title: "Breaking Political Update",
//       description:
//         "Major political developments are reshaping the national scenario.",
//       category: "Politics",
//     },
//     {
//       id: 2,
//       img: politics2,
//       title: "Election Results Announced",
//       description:
//         "Election results have been officially announced with surprising outcomes.",
//       category: "Politics",
//     },
//     {
//       id: 3,
//       img: politics3,
//       title: "New Policy Shocks Nation",
//       description:
//         "The newly introduced policy has triggered nationwide discussions.",
//       category: "Politics",
//     },
//   ];

//   return (
//     <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
//       {/* Main Hero */}
//       <div className="md:col-span-2 relative">
//         <img
//           src={leaderImg}
//           alt="Featured News"
//           className="rounded-xl w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
//         />

//         <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow max-w-[90%]">
//           <span className="text-red-600 text-sm font-semibold">
//             FEATURED
//           </span>
//           <h2 className="text-xl md:text-2xl font-bold mt-1">
//             Global Summit Brings Leaders Together
//           </h2>
//         </div>
//       </div>

//       {/* Right Side Breaking News */}
//       <div className="space-y-4">
//         {sideNews.map((item) => (
//           <div
//             key={item.id}
//             onClick={() =>
//               navigate("/breaking", {
//                 state: item,
//               })
//             }
//             className="flex gap-4 bg-white p-3 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
//           >
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-24 h-20 object-cover rounded-lg"
//             />
//             <div>
//               <span className="text-xs text-red-600 font-semibold">
//                 BREAKING
//               </span>
//               <p className="font-semibold text-sm leading-snug mt-1">
//                 {item.title}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Hero;



// checking news virsions 



import { useEffect, useState } from "react";
import leaderImg from "../assets/leader.jpg";
import politics1 from "../assets/politics1.jpg";
import politics2 from "../assets/politics2.jpg";
import politics3 from "../assets/politics3.jpg";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  /* ================= SLIDER IMAGES ================= */
  const images = [leaderImg, politics1, politics2, politics3];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // ⏱️ change every 4 sec

    return () => clearInterval(timer);
  }, []);

  /* ================= SIDE BREAKING ================= */
  const sideNews = [
    {
      id: 1,
      img: politics1,
      title: "Breaking Political Update",
    },
    {
      id: 2,
      img: politics2,
      title: "Election Results Announced",
    },
    {
      id: 3,
      img: politics3,
      title: "New Policy Shocks Nation",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
      {/* ================= MAIN HERO SLIDER ================= */}
      <div className="md:col-span-2 overflow-hidden rounded-xl relative">
        <div
          className="flex"
          style={{
            width: `${images.length * 100}%`,
            transform: `translateX(-${index * (100 / images.length)}%)`,
            transition: "transform 2.5s ease-in-out",
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Featured News"
              className="w-full h-[260px] sm:h-[320px] md:h-[420px] object-cover"
            />
          ))}
        </div>

        {/* Overlay Text */}
        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow max-w-[90%]">
          <span className="text-red-600 text-sm font-semibold">
            FEATURED
          </span>
          <h2 className="text-xl md:text-2xl font-bold mt-1">
            Global Summit Brings Leaders Together
          </h2>
        </div>
      </div>

      {/* ================= RIGHT SIDE BREAKING ================= */}
      <div className="space-y-4">
        {sideNews.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate("/breaking")}
            className="flex gap-4 bg-white p-3 rounded-xl shadow cursor-pointer hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-24 h-20 object-cover rounded-lg"
            />
            <div>
              <span className="text-xs text-red-600 font-semibold">
                BREAKING
              </span>
              <p className="font-semibold text-sm mt-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
