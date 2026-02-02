import { getHome } from "../lib/sanity.queries";

export default async function HomePage() {
  // This will return null until we create the Sanity schema + publish content.
  const home = await getHome();

  const headline = home?.headline ?? "Ficus Ceramica";
  const subhead =
    home?.subhead ??
    "presents a feast of porcelain slipcast foods, that function as paraphernalia, planters, and other special things. The bounty is inspired by, and made in New Orleans.";

  return (
    <div className="container">
      <section className="hero">
        <div className="heroBox">hero image goes here (Sanity next)</div>
        <h1 className="h1">{headline}</h1>
        <p className="p">{subhead}</p>
      </section>

      <section className="section">
        <h2 className="h2">best sellers</h2>
        <div className="grid">
          {["oyster pipe", "hotdog pipe", "crab claw holder", "asparagus two-hitter"].map((t) => (
            <div key={t} className="card">
              <div className="cardImg">image</div>
              <div className="cardBody">
                <div>{t}</div>
                <div className="smallMuted">$—</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="h2">subscribe</h2>
        <p className="p">
          join my mailing list for occasional email updates on new products & projects, studio workshops, in-person pop ups, and sales
        </p>
      </section>
    </div>
  );
}