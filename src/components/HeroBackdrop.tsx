/** Local cinematic backdrop. No third-party video CDN. */
export default function HeroBackdrop() {
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <div className="hero-backdrop__base" />
      <div className="hero-backdrop__grid" />
      <div className="hero-backdrop__glow hero-backdrop__glow--a" />
      <div className="hero-backdrop__glow hero-backdrop__glow--b" />
      <div className="hero-backdrop__scan" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" />
    </div>
  )
}
