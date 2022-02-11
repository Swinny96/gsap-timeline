import Year from "./Year";

function Timeline() {
  return (
    <nav>
      <div class="marker"></div>
      <div class="nav__track" data-draggable>
        <ul class="nav__list">
          <li>
            <Year id="#section_1" year="1993" />
          </li>
          <li>
            <Year id="#section_2" year="1995" />
          </li>
          <li>
            <Year id="#section_3" year="1997" />
          </li>
          <li>
            <Year id="#section_4" year="2000" />
          </li>
          <li>
            <Year id="#section_5" year="2001" />
          </li>
          <li>
            <Year id="#section_6" year="2003" />
          </li>
          <li>
            <Year id="#section_7" year="2007" />
          </li>
          <li>
            <Year id="#section_8" year="2011" />
          </li>
          <li>
            <Year id="#section_9" year="2016" />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Timeline;
