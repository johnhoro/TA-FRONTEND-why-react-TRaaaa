import articles from "../data/data";
import Article from "./Article";

function Articles() {
  return (
    <div className="article-container">
      <h2 className="cent">Articles List</h2>
      <section className="flex justify-between wrap">
        {articles.map((article) => (
          <Article key={article.publishedAt} {...article} />
        ))}
      </section>
    </div>
  );
}

export default Articles;
