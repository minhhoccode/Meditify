import "./postItem.scss";

export default function PostItem(props: any) {
  const tags = props.tags.map((tag: any) => {
    return (
      <a href={tag} id="tags">
        <span key={tag} className="card-badge card-badge-blue">
          {tag}
        </span>
      </a>
    );
  });

  return (
    <>
      <div className="card">
        <section className="container">
          <div className="card-container">
            <a href={props.title}>
              <div className="card-image">
                <img src={props.image} alt={props.title} />
              </div>
            </a>
            <div className="card-body">
              <div className="one-line">{tags}</div>
              <a href={props.title}>
                <h1>{props.title}</h1>
              </a>
              <p className="card-subtitle">{props.content}</p>
              <div className="card-author">
                <a href={props.author.name}>
                <img src={props.author.img} alt="author avatar" />
                </a>
                <div className="author-info">
                  <a href={props.author.name}>
                  <p id="author-name">{props.author.name}</p>
                  </a>
                  <p className="post-timestamp">{props.date}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
