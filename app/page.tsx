import Image from "next/image"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import { Header } from "@/components/storefront/header"
import { Hero } from "@/components/storefront/hero"
import { Collection } from "@/components/storefront/collection"
import {
  CollectionLink,
  ExperienceProvider,
  Parallax,
  Reveal,
} from "@/components/storefront/motion"
import { Lookbook } from "@/components/storefront/card-experiences"
import { categories, collections } from "@/lib/storefront"

export default function Page() {
  return (
    <ExperienceProvider>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <section
          className="category-section section-shell"
          id="categories"
          aria-labelledby="category-heading"
        >
          <Reveal className="section-heading">
            <div>
              <p className="eyebrow">EVERY KIND OF BEAUTIFUL</p>
              <h2 id="category-heading">
                Find your <em>silhouette.</em>
              </h2>
            </div>
            <p>
              Everyday ease. A little celebration.
              <br />
              Something to remember forever.
            </p>
          </Reveal>
          <div className="category-grid">
            {categories.map((category, index) => (
              <Reveal
                key={category.id}
                className="category-card"
                delay={index * 0.07}
              >
                <CollectionLink category={category.id}>
                  <div className="category-image">
                    <Image
                      src={`/media/${category.image}.webp`}
                      alt={`${category.name}: ${category.note.toLowerCase()}`}
                      fill
                      sizes="(max-width: 600px) 44vw, (max-width: 900px) 29vw, 18vw"
                    />
                    <span className="category-number">0{index + 1}</span>
                  </div>
                  <h3>
                    {category.name}
                    <ArrowUpRight size={17} />
                  </h3>
                  <p>{category.note}</p>
                </CollectionLink>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          className="campaign-section section-shell"
          id="collections"
          aria-labelledby="collections-heading"
        >
          <Reveal className="campaign-intro">
            <p className="eyebrow">THE MEHRE COLLECTIONS</p>
            <h2 id="collections-heading">
              Different moments.
              <br />
              <em>The same feeling.</em>
            </h2>
            <p>
              A familiar thread runs through everything we create.
              <br />
              Discover three expressions of MEHRE.
            </p>
          </Reveal>
          <div className="campaign-grid">
            {collections.map((collection, index) => (
              <Reveal
                key={collection.id}
                className={`campaign-card campaign-${collection.id}`}
                delay={index * 0.1}
              >
                <CollectionLink collection={collection.id}>
                  <div className="campaign-image">
                    <Parallax distance={28}>
                      <Image
                        src={`/media/${collection.image}.webp`}
                        alt={`${collection.name}, ${collection.subtitle}`}
                        fill
                        sizes="(max-width: 700px) 92vw, 31vw"
                      />
                    </Parallax>
                    <div className="campaign-overlay" />
                    <div className="campaign-top">
                      <span>{collection.season}</span>
                      <span>{collection.number}</span>
                    </div>
                    <div className="campaign-caption">
                      <p>{collection.subtitle}</p>
                      <h3>{collection.name}</h3>
                      <span>
                        Explore collection
                        <ArrowUpRight size={18} />
                      </span>
                    </div>
                  </div>
                  <p className="campaign-description">
                    {collection.description}
                  </p>
                </CollectionLink>
              </Reveal>
            ))}
          </div>
        </section>
        <section
          className="bridal-section"
          id="bridal"
          aria-labelledby="bridal-heading"
        >
          <div className="bridal-portrait">
            <Parallax distance={55}>
              <Image
                src="/media/bridal-editorial.webp"
                alt="Aab light ivory bridal lehenga with a full embroidered skirt and sheer dupatta"
                fill
                sizes="(max-width: 800px) 100vw, 52vw"
              />
            </Parallax>

            <span className="image-caption">AAB / LIGHT IVORY & CHAMPAGNE</span>
          </div>
          <div className="bridal-copy">
            <Reveal>
              <p className="eyebrow">INTRODUCING / IVORY VOWS</p>
              <h2 id="bridal-heading">
                A softer kind
                <br />
                of <em>bridal.</em>
              </h2>
              <p>
                Light ivory. A whisper of champagne. Embellishment that catches
                the light, and a silhouette that feels like you.
              </p>
              <p>
                Full skirts, delicate floral detail, and airy dupattas. For the
                beginning of your most beautiful chapter.
              </p>
              <CollectionLink collection="ivory" className="primary-link">
                Explore Ivory Vows
                <ArrowUpRight size={18} />
              </CollectionLink>
            </Reveal>
            <div className="bridal-detail">
              <Parallax distance={22}>
                <Image
                  src="/media/bridal-editorial-detail.webp"
                  alt="Close-up of the featured ivory bridal lehenga’s champagne floral beadwork, embroidered hem and scalloped sheer dupatta border"
                  fill
                  sizes="(max-width: 800px) 40vw, 20vw"
                />
              </Parallax>
              <span>A little closer. A little lovelier.</span>
            </div>
          </div>
        </section>
        <Collection />
        <section
          className="details-section"
          id="details"
          aria-labelledby="details-heading"
        >
          <div className="detail-photographs">
            <div className="detail-main">
              <Parallax distance={38}>
                <Image
                  src="/media/lehenga-detail.webp"
                  alt="Champagne botanical embroidery along a dusty rose lehenga hem"
                  fill
                  sizes="(max-width: 800px) 70vw, 40vw"
                />
              </Parallax>
            </div>
            <div className="detail-small">
              <Parallax distance={20}>
                <Image
                  src="/media/embroidery.webp"
                  alt="Oxblood botanical embroidery and a bordered dupatta on ivory fabric"
                  fill
                  sizes="(max-width: 800px) 35vw, 20vw"
                />
              </Parallax>
            </div>
          </div>
          <Reveal className="details-copy">
            <p className="eyebrow">THE BEAUTY OF A CLOSER LOOK</p>
            <h2 id="details-heading">
              It’s all in
              <br />
              <em>the details.</em>
            </h2>
            <p>
              A floral border. A softly falling dupatta. A thread of color that
              brings the whole ensemble together.
            </p>
            <p>
              From the simplicity of a plain suit to the intricacy of bridal
              embellishment, every look has its own language.
            </p>
            <div className="detail-list">
              <span>
                01 <strong>Expressive embroidery</strong>
              </span>
              <span>
                02 <strong>Beautiful drape</strong>
              </span>
              <span>
                03 <strong>Considered color</strong>
              </span>
            </div>
            <CollectionLink category="embroidered" className="text-link">
              Discover embroidered suits
              <ArrowUpRight size={16} />
            </CollectionLink>
          </Reveal>
        </section>
        <Lookbook />
        <section
          className="story-section"
          id="story"
          aria-labelledby="story-heading"
        >
          <div className="story-wordmark" aria-hidden="true">
            MEHRE
          </div>
          <div className="story-inner">
            <Reveal className="story-copy">
              <p className="eyebrow">ROOTED IN PAKISTAN</p>
              <h2 id="story-heading">
                Familiar roots.
                <br />
                <em>Your own story.</em>
              </h2>
              <p>
                MEHRE is a love letter to the way we dress, and the lives we
                dress for. The comfort of an ordinary morning. The joy of a
                celebration. The tenderness of a new beginning.
              </p>
              <p>Pakistani style, expressed in your own way.</p>
              <a href="#collections" className="light-link">
                Discover your chapter
                <ArrowUpRight size={17} />
              </a>
            </Reveal>
            <div className="story-image-wrap">
              <Parallax distance={42}>
                <Image
                  src="/media/story-editorial.webp"
                  alt="Woman in a plain olive Pakistani suit walking through a sunlit Lahore courtyard"
                  fill
                  sizes="(max-width: 800px) 80vw, 34vw"
                />
              </Parallax>
              <span className="story-image-note">A feeling of your own.</span>
            </div>
          </div>
        </section>
        <section className="closing-note section-shell">
          <Reveal>
            <span className="closing-flower" aria-hidden="true">
              ✳
            </span>
            <p className="eyebrow">FOR ALL THAT LIFE BECOMES</p>
            <h2>
              Every chapter.
              <br />
              <em>Beautifully yours.</em>
            </h2>
            <CollectionLink all className="primary-link">
              Explore all pieces
              <ArrowUpRight size={18} />
            </CollectionLink>
          </Reveal>
        </section>
      </main>
      <footer className="site-footer section-shell">
        <div className="footer-top">
          <a className="wordmark" href="#home" aria-label="MEHRE home">
            MEHRE<span className="wordmark-dot">·</span>
          </a>
          <p>For every chapter, beautifully.</p>
          <a href="#home" className="back-top">
            Back to the top
            <ArrowUp size={15} />
          </a>
        </div>
        <div className="footer-columns">
          <div>
            <p className="eyebrow">EXPLORE BY CATEGORY</p>
            <nav aria-label="Footer categories">
              {categories.map((item) => (
                <CollectionLink key={item.id} category={item.id}>
                  {item.name}
                </CollectionLink>
              ))}
            </nav>
          </div>
          <div>
            <p className="eyebrow">THE COLLECTIONS</p>
            <nav aria-label="Footer collections">
              {collections.map((item) => (
                <CollectionLink key={item.id} collection={item.id}>
                  {item.name}
                </CollectionLink>
              ))}
            </nav>
          </div>
          <div>
            <p className="eyebrow">THE WORLD OF MEHRE</p>
            <nav aria-label="Footer brand navigation">
              <a href="#story">Our story</a>
              <a href="#details">The details</a>
              <a href="#lookbook">The lookbook</a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MEHRE.</span>
          <p>
            Concept collections · AI-created imagery · Illustrative prices · No
            orders are processed.
          </p>
          <span>ROOTED IN PAKISTAN</span>
        </div>
      </footer>
    </ExperienceProvider>
  )
}
