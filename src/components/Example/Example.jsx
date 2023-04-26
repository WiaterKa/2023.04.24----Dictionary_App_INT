import React from "react";

export default function Example({ item }) {
  if (item.example) {
    return <p>"{item.example}"</p>;
  }
}
