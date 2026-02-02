export function Footer() {
  return (
    <div className="footerInner">
      <div>
        <div style={{ color: "#111", marginBottom: 8 }}>info</div>
        <div style={{ display: "grid", gap: 6 }}>
          <a href="/faq">FAQ</a>
          <a href="/shipping-returns">Shipping & Returns</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div>
        ©{new Date().getFullYear()} by Ficus Ceramica, 2801 Chartres St, New Orleans, LA
      </div>
    </div>
  );
}