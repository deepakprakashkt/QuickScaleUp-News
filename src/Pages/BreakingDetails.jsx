import { useEffect, useState } from "react";

function BreakingDetails() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  useEffect(() => {
    const fetchBreakingNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=${API_KEY}`
        );

        const data = await res.json();

        if (data.status !== "ok") {
          throw new Error(data.message || "Failed to fetch news");
        }

        setNews(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBreakingNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-600">
        Loading latest breaking news...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold mb-8">
        🔴 Breaking News – India
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {news.map((item, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={
                item.urlToImage ||
                "https://via.placeholder.com/600x400?text=Breaking+News"
              }
              alt={item.title}
              className="h-56 w-full object-cover"
            />

            <div className="p-5">
              <span className="text-xs text-red-600 font-semibold uppercase">
                {item.source.name}
              </span>

              <h2 className="font-bold text-lg mt-2">
                {item.title}
              </h2>

              <p className="text-gray-600 text-sm mt-3">
                {item.description}
              </p>

              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 text-red-600 font-semibold hover:underline"
              >
                Read Full News →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default BreakingDetails;


