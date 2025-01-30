import React, { useEffect, useState } from "react";
import haversine from "../lib/haversine";

const MyShop = () => {

  const [shops, setShops] = useState([])
  const [shop, setShop] = useState({})

  useEffect(() => {

    const url = "https://formacitron.github.io/shopslist/shops.json";
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data); setShops(data)
        const shopList = data;

        var options = {
          enableHighAccuracy: true,
          // timeout: 5000,
          maximumAge: 0,
        };

        function success(pos) {
          var crd = pos.coords;

          console.log("Votre position actuelle est :");
          let nearest = { distance: Infinity, shop: null }
          shopList.forEach(shop => {
            // console.log(crd.latitude, crd.longitude, shop.gps_lat, shop.gps_lng)
            const a = { latitude: crd.latitude, longitude: crd.longitude }
            const b = { latitude: shop.gps_lat, longitude: shop.gps_lng }

            console.log(haversine(a, b)) // 714504.18 (in meters)
            const distance = haversine(a, b)
            console.log(distance)
            if (distance < nearest.distance) {
              nearest = { distance, shop }
            }
          })
          setShop(nearest.shop);
          // console.log("Votre position actuelle est :");
          // console.log(`Latitude : ${crd.latitude}`);
          // console.log(`Longitude : ${crd.longitude}`);
          // console.log(`La précision est de ${crd.accuracy} mètres.`);
        }

        function error(err) {
          console.warn(`ERREUR (${err.code}): ${err.message}`);
        }

        navigator.geolocation.getCurrentPosition(success, error, options);
      })
      .catch(() => { alert('Une erreur est survenue') })
  }, [])



  return (
    <div>
      <h1>My Shop</h1>
      <ul>
        <li>{shop.name}</li>
        <li>{shop.zip_code}</li>
        <li>{shop.city}</li>
      </ul>
    </div>
  );
}

export default MyShop;
