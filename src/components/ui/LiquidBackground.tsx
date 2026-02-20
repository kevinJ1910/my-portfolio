export default function LiquidBackground() {
    return (
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
        style={{ zIndex: 0 }}
      >
        {/* Blob 1 — indigo */}
        <div
          className="animate-blob-1 absolute rounded-full opacity-25 blur-3xl"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-150px",
            background:
              "radial-gradient(circle, #6366f1 0%, #4f46e5 40%, transparent 70%)",
          }}
        />
  
        {/* Blob 2 — violet */}
        <div
          className="animate-blob-2 absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: "500px",
            height: "500px",
            top: "40%",
            right: "-100px",
            background:
              "radial-gradient(circle, #8b5cf6 0%, #7c3aed 40%, transparent 70%)",
          }}
        />
  
        {/* Blob 3 — cyan */}
        <div
          className="animate-blob-3 absolute rounded-full opacity-15 blur-3xl"
          style={{
            width: "450px",
            height: "450px",
            bottom: "10%",
            left: "20%",
            background:
              "radial-gradient(circle, #06b6d4 0%, #0891b2 40%, transparent 70%)",
          }}
        />
  
        {/* Blob 4 — pink */}
        <div
          className="animate-blob-1 absolute rounded-full opacity-10 blur-3xl"
          style={{
            width: "350px",
            height: "350px",
            top: "60%",
            left: "60%",
            background:
              "radial-gradient(circle, #ec4899 0%, #db2777 40%, transparent 70%)",
            animationDelay: "5s",
          }}
        />
  
        {/* Noise overlay para textura líquida */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />
      </div>
    )
  }