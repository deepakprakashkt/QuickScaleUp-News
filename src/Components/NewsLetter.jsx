// function Newsletter() {
//     return (
//         <section className="bg-red-600 text-white py-12">
//             <div className="max-w-xl mx-auto text-center">
//                 <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
//                 <p className="mt-2">Get latest news directly in your inbox</p>
//                 <div className="mt-6 flex">
//                     <input
//                         className="flex-1 px-4 py-2 text-black rounded-l-lg"
//                         placeholder="Enter your email"
//                     />
//                     <button className="bg-black px-6 rounded-r-lg">Subscribe</button>
//                 </div>
//             </div>
//         </section>
//     );
// }


// export default Newsletter;









// function Newsletter() {
//     return (
//         <section className="bg-yellow-900 text-white py-12">
//             <div className="max-w-xl mx-auto text-center">
//                 <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
//                 <p className="mt-2">Get latest news directly in your inbox</p>
//                 <div className="mt-6 flex">
//                     <input
//                         className="flex-1 px-4 py-2 text-black rounded-l-lg"
//                         placeholder="Enter your email"
//                     />
//                     <button className="bg-black px-6 rounded-r-lg">Subscribe</button>
//                 </div>
//             </div>
//         </section>
//     );
// }


// export default Newsletter;




// iske pahle v perfect hai but new update in down code 


import { useState } from "react";
import { toast } from "react-toastify";

function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.includes("@") || !email.includes(".")) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Subscribed successfully");
    setEmail("");
  };

  return (
    <section className="bg-[#7a450d] py-16 mt-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-white/90 mt-3">
          Get latest news directly in your inbox
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-5 py-3 rounded-md w-full sm:w-96 outline-none"
          />

          <button
            onClick={handleSubscribe}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-900 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}

export default Newsletter;
