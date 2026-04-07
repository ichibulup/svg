export function SvgComponent(props) {
  const CX = 1024;
  const CY = 1024;

  const SQRT3 = Math.sqrt(3);

  const A = 256 * SQRT3; // 256√3
  const B = 128 * SQRT3; // 128√3
  const C = 64 * SQRT3;  // 64√3

  const p = (x, y) => `${x},${y}`;

  return (
    <svg width="1024" height="1024" viewBox="512 512 1024 1024">

      <rect width="2048" height="2048" fill="none"/>

      <circle cx={CX} cy={CY} r={512} fill="none"/>

      {/* HEX */}
      <polygon
        points={[
          p(CX, CY - 512),
          p(CX + A, CY - 256),
          p(CX + A, CY + 256),
          p(CX, CY + 512),
          p(CX - A, CY + 256),
          p(CX - A, CY - 256),
        ].join(" ")}
        fill="none"
      />

      {/* TOP INNER */}
      <polygon
        points={[
          p(CX, CY - 409.6),
          p(CX + B, CY - 256),
          p(CX, CY - 102.4),
          p(CX - B, CY - 256),
        ].join(" ")}
        fill="none"
      />

      {/* SAMPLE FACE */}
      <polygon
        points={[
          p(CX, CY - 409.6),
          p(CX, CY - 307.2),
          p(CX + B, CY - 153.6),
          p(CX + B, CY - 256),
        ].join(" ")}
        fill="#ccc"
      />

      {/* CENTER HEX CUT */}
      <polygon
        points={[
          p(CX, CY),
          p(CX - A, CY - 256),
          p(CX, CY - 512),
          p(CX + A, CY - 256),
          p(CX, CY),

          p(CX, CY - 102.4),
          p(CX - B, CY - 256),
          p(CX, CY - 409.6),
          p(CX + B, CY - 256),
          p(CX, CY - 102.4),
        ].join(" ")}
        fillRule="evenodd"
        fill="#EBDAF6"
      />

    </svg>
  );
}