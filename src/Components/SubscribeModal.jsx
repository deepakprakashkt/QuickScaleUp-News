// // src/Components/SubscribeModal.jsx
// import { useState } from "react";
// import { toast } from "react-toastify";

// function SubscribeModal({ onClose }) {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubscribe = async () => {
//     if (!email) {
//       toast.error("Please enter a valid email");
//       return;
//     }

//     setLoading(true);

//     // 🔗 Future API Ready
//     setTimeout(() => {
//       setLoading(false);
//       toast.success("Subscribed successfully! 🎉");
//       onClose();
//     }, 1200);
//   };

//   return (
//     <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
//       <div className="bg-white rounded-xl p-6 w-[90%] max-w-md">
//         <h2 className="text-2xl font-bold mb-2">
//           Subscribe to Quick ScaleUp News
//         </h2>

//         <p className="text-gray-600 text-sm mb-4">
//           Get breaking news & exclusive updates directly in your inbox.
//         </p>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full border px-4 py-2 rounded-lg mb-4"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <div className="flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 text-gray-600"
//           >
//             Cancel
//           </button>

//           <button
//             onClick={handleSubscribe}
//             disabled={loading}
//             className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700"
//           >
//             {loading ? "Subscribing..." : "Subscribe"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SubscribeModal;



// good but check new update



import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SubscribeModal({ onClose }) {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(email);

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      toast.error("Enter valid Gmail address");
      return;
    }

    localStorage.setItem("subscribedEmail", email);
    toast.success("Subscribed successfully");

    onClose();

    setTimeout(() => {
      navigate("/auth", {
        state: {
          mode: "signup",
          email,
        },
      });
    }, 800);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
      <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
        <h2 className="text-xl font-bold mb-4">Subscribe</h2>

        <input
          type="email"
          placeholder="Enter Gmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-4"
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose}>Cancel</button>
          <button
            onClick={handleSubscribe}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default SubscribeModal;
