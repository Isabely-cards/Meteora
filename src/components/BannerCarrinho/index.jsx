import React from "react";
import bannerCarrinho from "../../../public/assets/images/banner-carrinho.png";

export default function BannerCarrinho () {
  return (
    <img
      className="custom-img"
      src={bannerCarrinho}
      alt="Imagem de uma sacola de compras"
    />
  );
};