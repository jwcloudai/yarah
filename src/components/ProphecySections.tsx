import img1 from "@/assets/prophecy-1.png.asset.json";
import img2 from "@/assets/prophecy-2.png.asset.json";
import img3 from "@/assets/prophecy-3.png.asset.json";
import img4 from "@/assets/prophecy-4.png.asset.json";

type Block = {
  eyebrow: string;
  title: string;
  highlight: string;
  titleTail: string;
  body: string;
  image: string;
  alt: string;
};

const blocks: Block[] = [
  {
    eyebrow: "I · The Last Generation",
    title: "Born to see the ",
    highlight: "King return",
    titleTail: " and reign with Him.",
    body: "The last generation was born to do what every other generation only prayed for — to see the King return, to reign with Him, and to enforce His victory on the earth.",
    image: img1.url,
    alt: "Multitudes worshipping as the King returns in glory",
  },
  {
    eyebrow: "II · The Mark & The King",
    title: "Only one requires your ",
    highlight: "preparation",
    titleTail: ".",
    body: "The mark is coming. The King is coming. Only one requires your preparation. Yarah Life does not raise a generation in fear of the mark — it raises a generation so shaped in Christ that the choice is never in doubt.",
    image: img2.url,
    alt: "The choice between the mark of the beast and the crown of Christ",
  },
  {
    eyebrow: "III · A Prepared People",
    title: "The Kingdom comes through a ",
    highlight: "prepared generation",
    titleTail: ".",
    body: "The Kingdom of Heaven is not coming to a passive generation — it is coming through a prepared one. Yarah Life raises sons and daughters of light who do not wait for the world to change. They are the change.",
    image: img3.url,
    alt: "A radiant generation walking forward into the light",
  },
  {
    eyebrow: "IV · This Hour, This Generation",
    title: "The prophets saw it. ",
    highlight: "You will live it",
    titleTail: ".",
    body: "Every prophet saw this moment — only this generation gets to live it. The apostles longed for it, the saints died for it, your children will stand in it. The question is whether they will stand firm.",
    image: img4.url,
    alt: "Prophets beholding the scrolls of Isaiah, Daniel and Revelation",
  },
];

export function ProphecySections() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{ background: "var(--canvas)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-20">
          <div
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
            style={{ color: "var(--crimson)" }}
          >
            — Why Yarah Life Exists
          </div>
          <h2
            className="font-display text-4xl md:text-6xl font-bold leading-[1.05]"
            style={{ color: "var(--navy)" }}
          >
            Raised for{" "}
            <span style={{ color: "var(--emerald)" }}>this hour</span>.
            Shaped for the <span style={{ color: "var(--crimson)" }}>King</span>.
          </h2>
        </div>

        <div className="space-y-28 md:space-y-36">
          {blocks.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={i}
                className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center`}
              >
                <div className={reverse ? "md:order-2" : ""}>
                  <div
                    className="relative overflow-hidden rounded-3xl"
                    style={{
                      boxShadow:
                        "0 30px 60px -25px rgba(26,59,139,0.45), 0 10px 25px -10px rgba(15,117,58,0.25)",
                    }}
                  >
                    <img
                      src={b.image}
                      alt={b.alt}
                      loading="lazy"
                      className="w-full h-[360px] md:h-[460px] object-cover"
                    />
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(180deg, transparent 55%, rgba(26,59,139,0.35) 100%)",
                      }}
                    />
                    <div
                      className="absolute top-5 left-5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase"
                      style={{ background: "var(--gold)", color: "var(--charcoal)" }}
                    >
                      Chapter 0{i + 1}
                    </div>
                  </div>
                </div>

                <div className={reverse ? "md:order-1" : ""}>
                  <div
                    className="text-xs tracking-[0.3em] uppercase font-semibold mb-5"
                    style={{ color: "var(--emerald)" }}
                  >
                    {b.eyebrow}
                  </div>
                  <h3
                    className="font-display text-3xl md:text-5xl font-bold leading-[1.1] mb-6"
                    style={{ color: "var(--navy)" }}
                  >
                    {b.title}
                    <span style={{ color: "var(--crimson)" }}>{b.highlight}</span>
                    {b.titleTail}
                  </h3>
                  <p
                    className="text-base md:text-lg leading-relaxed"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {b.body}
                  </p>
                  <div
                    className="mt-8 h-[3px] w-24 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
