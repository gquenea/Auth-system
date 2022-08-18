import React, { useState, useEffect } from "react";

// @TODO: Modify with real token

export default function Dashboard() {
  const [data, setData] = useState();

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    return fetch("/api/data", {
      method: "GET",
      headers: {
        "x-access-token": "xxxxx",
      },
    })
      .then((data) => data.json())
      .then((json) => setData(json));
  }

  return <h2>here is dashboard data: {data}</h2>;
}
