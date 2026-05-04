"use client";

interface MenuCardProps {
  name: string;
  ingredients: string;
  price: string;
  image: string;
}

export default function MenuCard({ name, ingredients, price, image }: MenuCardProps) {
  return (
    <div className="menu-card group">
      {/* IMAGE ZONE — top 65% */}
      <div className="menu-card__image-zone">
        <img
          src={image}
          alt={name}
          className="menu-card__image"
        />
        {/* Gradient overlay on image */}
        <div className="menu-card__image-gradient" />
      </div>

      {/* TEXT ZONE — bottom 35% */}
      <div className="menu-card__text-zone">
        <h3 className="menu-card__name font-title">
          {name}
        </h3>
        <div className="menu-card__separator" />
        <p className="menu-card__ingredients font-sans">
          {ingredients}
        </p>
        <span className="menu-card__price font-title">
          {price}
        </span>
      </div>
    </div>
  );
}
