import React from "react";

const Nav = (props) => {
  return (
    <nav>
      <ul>
        { props.navItems.map(navItem => (
            <li>
                <a key = {navItem} href={`#${navItem}`}>{navItem}</a>
            </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
