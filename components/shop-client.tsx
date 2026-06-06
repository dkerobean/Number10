"use client";

import Image from "next/image";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { products } from "@/data/site";
import { formatGhs } from "@/lib/utils";

export function ShopClient() {
  const [cart, setCart] = useState<Record<string, number>>({});

  const totalItems = Object.values(cart).reduce((sum, count) => sum + count, 0);
  const total = products.reduce((sum, product) => sum + (cart[product.id] ?? 0) * product.price, 0);

  return (
    <div className="shop-layout">
      <div className="product-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card card">
            <div className="product-image">
              <Image src={product.image} alt={product.name} width={900} height={900} sizes="(max-width: 860px) 100vw, 33vw" />
              <span>{product.badge}</span>
            </div>
            <div className="product-copy">
              <div>
                <h3>{product.name}</h3>
                <strong>{formatGhs(product.price)}</strong>
              </div>
              <p>{product.description}</p>
              <small>
                {product.category} • {product.stock}
              </small>
              <button
                type="button"
                onClick={() => setCart((current) => ({ ...current, [product.id]: (current[product.id] ?? 0) + 1 }))}
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>

      <aside className="cart-panel dark-panel" aria-label="Demo cart summary">
        <ShoppingBag size={28} />
        <p className="eyebrow">Demo cart</p>
        <h2>{totalItems} item{totalItems === 1 ? "" : "s"}</h2>
        <p>Checkout is prepared as a demo flow. Payment, inventory, and order emails can be connected in the production phase.</p>
        <div>
          <span>Estimated total</span>
          <strong>{formatGhs(total)}</strong>
        </div>
        <button type="button">Proceed to checkout</button>
      </aside>
    </div>
  );
}
