import { View, Text } from "react-native";
import { useState, useEffect } from "react";

import { PRAY_URL } from "../../configs";

export default function Home() {
  const [pray, setPray] = useState();

  useEffect(() => {
    const request = new XMLHttpRequest();
    request.open("GET", PRAY_URL);
    request.send();
    request.onload = () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = request.response;
        console.log(JSON.parse(data));
        setPray(JSON.parse(data));
      } else {
        console.log(`Error: ${request.status}`);
      }
    };
  });

  return (
    <View>
      {pray && (
        <>
          <Text>Home</Text>
          <Text>{pray.primeiraLeitura.texto}</Text>
        </>
      )}
    </View>
  );
}