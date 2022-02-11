function Section(props) {
  return (
    <section id={props.id}>
      <div class="container">
        <h2 class="section__heading">
          <span>{props.year}</span>
          <span>{props.title}</span>
        </h2>
        <div class="section__image">
          <img src={props.image} width="1200" height="1200" alt={props.title} />
        </div>
      </div>
    </section>
  );
}

export default Section;
