import './Article.css';


function Article(props)
{
    return(
 <article>
      {/* { <p>Lotenetur neque. Amet ad quisquam laudantium facilis iste voluptatem ratione, dignissimos omnis.rem ips um dolor sit amet, consectetur adipisicing elit. Provident impedit maxime ducimus esse culpa laudantium mollitia quis animi</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nemo illo non eius assumenda natus laborum, error mollitia quasi dolores modi ipsa deserunt vel quia iure et totam atque eveniet.</p>} */}
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </article>
    )
}

export default Article;