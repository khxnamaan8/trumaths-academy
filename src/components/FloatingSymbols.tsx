const symbols = ["π", "∑", "√", "∫", "x²", "Δ", "∞", "θ", "±", "≈"];

const FloatingSymbols = () => {
  const items = symbols.map((symbol, i) => ({
    symbol,
    left: `${(i * 10) + Math.random() * 5}%`,
    top: `${Math.random() * 100}%`,
    size: 20 + Math.random() * 40,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 8,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className="absolute float-symbol font-bold text-primary"
          style={{
            left: item.left,
            top: item.top,
            fontSize: `${item.size}px`,
            "--duration": `${item.duration}s`,
            "--delay": `${item.delay}s`,
            animationDelay: `${item.delay}s`,
            opacity: 0.08,
          } as React.CSSProperties}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
};

export default FloatingSymbols;
