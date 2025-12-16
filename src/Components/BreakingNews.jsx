// function BreakingNews() {
//   return (
//     <div className="bg-red-600 text-white py-2 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <marquee className="font-semibold">
//           🔴 Breaking: QuickScaleUp delivers breaking news and in-depth coverage on business growth, emerging technologies and AI, global health developments, scientific advancements, and major world affairs.
//         </marquee>
//       </div>
//     </div>
//   );
// }

// export default BreakingNews;


import { useNavigate } from "react-router-dom";

function BreakingNews({ category = "general" }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/breaking/${category}`)}
      className="bg-red-600 text-white py-2 overflow-hidden cursor-pointer"
    >
      <div className="max-w-7xl mx-auto px-6">
        <marquee className="font-semibold">
          🔴 Breaking: Click here to read latest {category} breaking news on
          QuickScaleUp
        </marquee>
      </div>
    </div>
  );
}

export default BreakingNews;
