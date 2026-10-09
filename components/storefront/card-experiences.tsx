import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { products } from "@/lib/storefront"
import { CollectionLink, Parallax, Reveal } from "./motion"
const looks = ["seher", "mahak", "aab", "raat"].map((id) =>
  products.find((product) => product.id === id)!
)
export function Lookbook() {
  return (
    <section
      id="lookbook"
      className="lookbook-section section-shell"
      aria-labelledby="lookbook-heading"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">A FEW MOMENTS, IN MEHR</p>
          <h2 id="lookbook-heading">
            Life, in <em>beautiful chapters.</em>
          </h2>
        </div>
        <p>
          A quiet morning. A room full of laughter.
          <br />A beginning you will always remember.
        </p>
      </Reveal>
      <div
        className="lookbook-grid"
        role="region"
        aria-label="Editorial lookbook, scroll horizontally on mobile to explore"
        tabIndex={0}
      >
        {looks.map((product, index) => (
          <Reveal
            key={product.id}
            className="lookbook-card"
            delay={index * 0.08}
          >
            <CollectionLink category={product.category}>
              <div className="lookbook-image">
                <Parallax distance={24}>
                  <Image
                    src={`/media/lookbook-${product.id}.webp`}
                    alt={`${product.name}, ${product.color} ${product.kind.toLowerCase()}`}
                    fill
                    sizes="(max-width: 600px) 80vw, (max-width: 1000px) 44vw, 23vw"
                  />
                </Parallax>
                <span>0{index + 1} / MEHR</span>
              </div>
              <p className="eyebrow">{product.moment}</p>
              <h3>
                {product.name}
                <ArrowUpRight size={20} />
              </h3>
            </CollectionLink>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
