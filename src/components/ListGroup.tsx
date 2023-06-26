// go to getbootstrap.com -> docs -> components -> ListGroup to find template markup code for ListGroup

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

// <> </> is equal to telling react to use <Fragment> </Fragment>
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0); // Hook, tell react that this component could have data or state that change over time
  return (
    <>
      <h1>{heading}</h1>

      {/*Use short circuiting to acheive conditional rendering */}
      {items.length === 0 && <p>No item found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
