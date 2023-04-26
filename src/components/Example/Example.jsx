import React from "react";

export default function Example({ item }) {
  if (item.example) {
    console.log("jebać pis");
    console.log(item.example);
    return <p>"{item.example}"</p>;
  }
}
