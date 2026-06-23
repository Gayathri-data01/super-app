import { useEffect, useState } from "react";

function News() {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);

  const API_KEY = "1b68870481a44f7fa4fc88ea1c6f0cd7";

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles || []));
  }, []);

  useEffect(() => {
    if (!articles.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % articles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [articles]);

  if (!articles.length) return <p>Loading News...</p>;

  return (
    <div className="card">
      <h2>News</h2>
      <p>{articles[index].title}</p>
    </div>
  );
}

export default News;