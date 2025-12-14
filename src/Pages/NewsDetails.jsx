import { useLocation, useNavigate } from "react-router-dom";

function NewsDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="text-center py-20">
        <p>News not found</p>
        <button onClick={() => navigate("/")} className="text-red-600 underline">
          Go Home
        </button>
      </div>
    );
  }

  const { image, title, category, description } = state;

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <img src={image} className="w-full h-96 object-cover rounded-xl mb-6" />
      <span className="text-red-600 font-semibold">{category}</span>
      <h1 className="text-3xl font-bold mt-2">{title}</h1>
      <p className="mt-4 text-gray-700">{description}</p>
    </section>
  );
}

export default NewsDetails;
