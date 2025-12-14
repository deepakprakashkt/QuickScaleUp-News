// function PostCard() {
//     return (
//         <div className="bg-white rounded-xl shadow overflow-hidden">
//             <img src="https://source.unsplash.com/400x250/?health" />
//             <div className="p-4">
//                 <span className="text-red-500 text-sm">Health</span>
//                 <h3 className="font-bold mt-2">Healthy Living Tips in 2025</h3>
//             </div>
//         </div>
//     );
// }


// export default PostCard;






// function PostCard({ image, category, title }) {
//   return (
//     <div className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition">
      
//       <img
//         src={image}
//         alt={title}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-4">
//         <span className="text-red-500 text-sm font-semibold">
//           {category}
//         </span>

//         <h3 className="font-bold mt-2 text-gray-900">
//           {title}
//         </h3>
//       </div>
//     </div>
//   );
// }

// export default PostCard;





import { useNavigate } from "react-router-dom";

function PostCard({ id, image, category, title, description }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/news/${category}/${id}`, {
          state: { image, title, category, description },
        })
      }
      className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition"
    >
      <img src={image} className="w-full h-48 object-cover rounded-t-xl" />
      <div className="p-4">
        <span className="text-red-500 text-sm">{category}</span>
        <h3 className="font-bold mt-2">{title}</h3>
      </div>
    </div>
  );
}

export default PostCard;
