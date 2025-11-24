import dayjs from "dayjs";

import { navIcons, navLinks } from "#constants";
import useWindowStore from "#store/window";

const Navbar = () => {
  const { openWindow } = useWindowStore();
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" />
        <p className="font-bold">Anirudh's Portfolio</p>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => openWindow(link.type)}>
              <p>{link.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img
                src={img}
                alt={`icon-$${img}-${id}`}
                className="icon-hover"
              />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
