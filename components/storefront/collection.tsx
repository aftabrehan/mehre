"use client"

import Image from "next/image"
import { forwardRef } from "react"
import { AnimatePresence, motion, useIsPresent } from "motion/react"
import { motionTiming } from "@/lib/motion"
import { ArrowUpRight, Plus, X } from "lucide-react"
import {
  categories,
  collections,
  filterProducts,
  formatPrice,
  initialFilters,
  type Category,
  type CollectionId,
  type Occasion,
} from "@/lib/storefront"
import { Reveal, useExperience } from "./motion"

export function Collection() {
  const { filters, setFilters, reduceMotion } = useExperience()
  const visible = filterProducts(filters)
  const hasFilters = Object.values(filters).some((value) => value !== "all")
  const activeCategory = categories.find(
    (item) => item.id === filters.category
  )?.name
  const activeCollection = collections.find(
    (item) => item.id === filters.collection
  )?.name
  return (
    <section
      className="collection-section section-shell"
      id="collection"
      aria-labelledby="collection-heading"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">A WARDROBE, BEAUTIFULLY CONSIDERED</p>
          <h2 id="collection-heading">
            Find your <em>next favorite.</em>
          </h2>
        </div>
        <p>
          From quiet mornings to unforgettable evenings.
          <br />
          Explore the pieces that speak to you.
        </p>
      </Reveal>
      <div className="catalog-toolbar">
        <div className="catalog-fields">
          <label>
            Category
            <select
              value={filters.category}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  category: event.target.value as Category,
                }))
              }
            >
              <option value="all">All categories</option>
              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Collection
            <select
              value={filters.collection}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  collection: event.target.value as CollectionId,
                }))
              }
            >
              <option value="all">All collections</option>
              {collections.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            Occasion
            <select
              value={filters.occasion}
              onChange={(event) =>
                setFilters((current) => ({
                  ...current,
                  occasion: event.target.value as Occasion,
                }))
              }
            >
              <option value="all">All occasions</option>
              <option value="festive">Festive</option>
            </select>
          </label>
        </div>
        <p className="catalog-count" role="status">
          {String(visible.length).padStart(2, "0")}{" "}
          {visible.length === 1 ? "piece" : "pieces"}
        </p>
      </div>
      {hasFilters && (
        <div className="active-filters" aria-label="Active filters">
          {activeCategory && (
            <button
              onClick={() =>
                setFilters((current) => ({ ...current, category: "all" }))
              }
              aria-label={`Remove category filter ${activeCategory}`}
            >
              {activeCategory}
              <X size={13} />
            </button>
          )}
          {activeCollection && (
            <button
              onClick={() =>
                setFilters((current) => ({ ...current, collection: "all" }))
              }
              aria-label={`Remove collection filter ${activeCollection}`}
            >
              {activeCollection}
              <X size={13} />
            </button>
          )}
          {filters.occasion === "festive" && (
            <button
              onClick={() =>
                setFilters((current) => ({ ...current, occasion: "all" }))
              }
              aria-label="Remove festive occasion filter"
            >
              Festive
              <X size={13} />
            </button>
          )}
          <button
            className="clear-filters"
            onClick={() => setFilters(initialFilters)}
          >
            Clear all
          </button>
        </div>
      )}
      <div className="product-grid">
        <AnimatePresence initial={false} mode="popLayout">
          {visible.map((product, index) => (
            <AnimatedProduct
              index={index}
              key={product.id}
              className="product-card"
              id={`piece-${product.id}`}
            >
              <div className="product-image-wrap">
                <Image
                  src={`/media/${product.image}.webp`}
                  alt={`${product.name}: ${product.color.toLowerCase()} ${product.kind.toLowerCase()}`}
                  fill
                  sizes="(max-width: 600px) 46vw, (max-width: 1100px) 30vw, 23vw"
                  className="product-image"
                />
                <span className="product-edit">
                  {product.category === "bridal"
                    ? "IVORY VOWS"
                    : product.category === "lehenga"
                      ? "RANG"
                      : product.kind}
                </span>
              </div>
              <div className="product-caption">
                <h3>{product.name}</h3>
                <span className="product-price">
                  {formatPrice(product.price)}
                </span>
              </div>
              <p className="product-kind">{product.kind}</p>
              <p className="product-includes">{product.pieces}</p>
              <p className="product-color">
                <span
                  aria-hidden="true"
                  style={{ backgroundColor: product.swatch }}
                />
                {product.color}
              </p>
              <details className="product-details">
                <summary aria-label={`${product.name} piece details`}>
                  Piece details
                  <Plus size={14} />
                </summary>
                <div>
                  <p>{product.description}</p>
                  <dl>
                    <div>
                      <dt>Fabric concept</dt>
                      <dd>{product.fabric}</dd>
                    </div>
                    <div>
                      <dt>Includes</dt>
                      <dd>{product.pieces}</dd>
                    </div>
                  </dl>
                  <a href="#lookbook">
                    Explore the lookbook
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </details>
            </AnimatedProduct>
          ))}
        </AnimatePresence>
      </div>
      {visible.length === 0 && (
        <motion.div
          className="catalog-empty"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduceMotion ? 0 : motionTiming.change }}
        >
          <h3>A different chapter awaits.</h3>
          <p>
            No pieces match these filters. Try another category or collection.
          </p>
          <button
            className="primary-link"
            onClick={() => setFilters(initialFilters)}
          >
            View all pieces
            <ArrowUpRight size={16} />
          </button>
        </motion.div>
      )}
      <p className="collection-footnote">
        A concept wardrobe. Displayed prices are illustrative; new pieces are
        collection previews.
      </p>
    </section>
  )
}

// Exiting cards stop participating in keyboard and screen-reader navigation.
const AnimatedProduct = forwardRef<
  HTMLElement,
  {
    children: React.ReactNode
    className: string
    id: string
    index: number
  }
>(function AnimatedProduct({ children, className, id, index }, ref) {
  const present = useIsPresent()
  const { reduceMotion } = useExperience()
  return (
    <motion.article
      ref={ref}
      className={className}
      id={id}
      inert={!present}
      aria-hidden={!present || undefined}
      layout={reduceMotion ? false : "position"}
      initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: reduceMotion ? 0 : motionTiming.change,
        ease: motionTiming.ease,
        opacity: { duration: reduceMotion ? 0 : 0.22 },
        y: { delay: reduceMotion ? 0 : Math.min(index * 0.035, 0.18) },
      }}
    >
      {children}
    </motion.article>
  )
})
