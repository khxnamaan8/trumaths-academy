const symbols = ["π", "∑", "√", "∫", "x²", "Δ", "∞", "θ", "±", "≈", "y=mx+c", "a²+b²", "∂", "λ", "∮"];

const FloatingSymbols = () => {
  const items = symbols.map((symbol, i) => ({
    symbol,
    left: `${(i * 6.5) + Math.random() * 3}%`,
    top: `${Math.random() * 100}%`,
    size: 28 + Math.random() * 50,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * 6,
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
            opacity: 0.15,
          } as React.CSSProperties}
        >
          {item.symbol}
        </span>
      ))}
    </div>
  );
};

export default FloatingSymbols;
