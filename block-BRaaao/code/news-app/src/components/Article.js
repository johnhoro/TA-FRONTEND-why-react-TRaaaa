function Article(props) {
  return (
    <article className="flex article">
      <div className="box">
        <img src={props.urlToImage} alt={props.title} className="img" />
        <h1>{props.title}</h1>
        <p>{props.content.slice(0, 200)}</p>
        <a href={props.url}>Read More</a>
      </div>
    </article>
  );
}

export default Article;
