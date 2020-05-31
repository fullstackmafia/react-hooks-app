import React, { useState, useEffect } from "react";
import { Item } from "semantic-ui-react";
import { A } from "hookrouter";
// import uselockBodyScroll from "./useLockBodyScroll";

const URL = "https://api.punkapi.com/v2/beers";
const divStyle = {
  margin: "80px",
  padding: "50px",
  width: 200,
  backgroundColor: "#eeccff",
  borderRadius: "10px"
};

export default function Landing() {
  // uselockBodyScroll();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div>
      <button>
        <A style={{ textDecoration: "none" }} href="/">
          HOME
        </A>{" "}
        <br />
      </button>
      {data.map(item => (
        <Item.Group key={item.id} style={divStyle}>
          <Item>
            <Item.Image
              width="80"
              size="tiny"
              src={item.image_url}
              alt="Beer Flask"
            />
            <Item.Content>
              <Item.Header>{item.name}</Item.Header>
              <Item.Extra>{item.tagline}</Item.Extra>
              <Item.Meta style={{ lineHeight: 1.5 }}>
                {item.description}
              </Item.Meta>
            </Item.Content>
          </Item>
        </Item.Group>
      ))}
    </div>
  );
}
