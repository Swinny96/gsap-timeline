function Year(props) {
  return (
    <li>
      <a href={props.id} class="nav__link" data-link>
        <span>{props.year}</span>
      </a>
    </li>
  );
}

export default Year;
