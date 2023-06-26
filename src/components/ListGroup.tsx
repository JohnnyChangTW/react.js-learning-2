import { MouseEvent } from "react";
// go to bootstrap.com -> docs -> components -> ListGroup to find template markup code for ListGroup
// <> </> is equal to telling react to use <Fragment> </Fragment>
function ListGroup() {
  let items = ["New York", "San Francisco", "Tokoyo", "London", "Paris"];
  let selectedIndex = 0;
  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log(event); // We can use event. to access its properties
    // console.log("Cliced:", item, "index:", index); // todo: how access item and index here?
  };
  return (
    <>
      <h1>List</h1>

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
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
