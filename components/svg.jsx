export function SvgComponent(props) {
  const CENTER = 1024;
  const STEP = 256 / 5;
  const SQRT3 = Math.sqrt(3);

  const x = (k) => CENTER + k * STEP * SQRT3;
  const y = (k) => CENTER + k * STEP;
  const point = ([kx, ky]) => `${x(kx)},${y(ky)}`;
  const points = (...coords) => coords.map(point).join(" ");

  return (
    <svg width="512" height="512" viewBox="512 512 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        {/* Royal */}
        <linearGradient id="royal" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#8C6B3B" />
          <stop offset="25%" stopColor="#A08D57" />
          <stop offset="50%" stopColor="#B08D57" />
          <stop offset="75%" stopColor="#C89B41" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>

        {/* Antique Metal */}
        <linearGradient id="gold-metal" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C5AB50" />
          <stop offset="25%" stopColor="#E4D674" />
          <stop offset="50%" stopColor="#FBF8AE" />
          <stop offset="75%" stopColor="#F9FADE" />
          <stop offset="100%" stopColor="#AC933E" />
        </linearGradient>

        {/* Fancy Metal */}
        <linearGradient id="fancy-metal" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#CC9900" />
          <stop offset="25%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#DEB82D" />
          <stop offset="75%" stopColor="#E7CF27" />
          <stop offset="100%" stopColor="#FFDF00" />
        </linearGradient>

        {/* Gold Metal */}
        <linearGradient id="golden-metal" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#C18700" />
          <stop offset="25%" stopColor="#D8A309" />
          <stop offset="50%" stopColor="#EABF14" />
          <stop offset="75%" stopColor="#EAD355" />
          <stop offset="100%" stopColor="#F7F18B" />
        </linearGradient>

        {/* Dark Metal */}
        <linearGradient id="dark-metal" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#191919" />
          <stop offset="25%" stopColor="#393939" />
          <stop offset="50%" stopColor="#4B4B4B" />
          <stop offset="75%" stopColor="#535353" />
          <stop offset="100%" stopColor="#5D5D5D" />
        </linearGradient>

        {/* Silver Metal */}
        <linearGradient id="silver-metal" x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#B4B5B8" />
          <stop offset="25%" stopColor="#C0C0C3" />
          <stop offset="50%" stopColor="#CBCCCD" />
          <stop offset="75%" stopColor="#D7D7D8" />
          <stop offset="100%" stopColor="#E3E3E3" />
        </linearGradient>

        {/* Platinum Metal */}
        <linearGradient id="platinum-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#CDCDCD" />
          <stop offset="25%" stopColor="#DADADA" />
          <stop offset="50%" stopColor="#E6E6E6" />
          <stop offset="75%" stopColor="#F0F0F0" />
          <stop offset="100%" stopColor="#F6F6F6" />
        </linearGradient>

        {/* Champagne Metal */}
        <linearGradient id="champagne-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="50%" stopColor="#F3E6C9" />
          <stop offset="100%" stopColor="#CFC8BE" />
        </linearGradient>
      </defs>

      <rect width="2048" height="2048" fill="none" />

      <circle cx={CENTER} cy={CENTER} r="512" fill="none" />
      {/* <circle cx={CENTER} cy={CENTER} r="768" fill="url(#silver-metal)" /> */}

      <polygon
        points={points([0, -10], [5, -5], [5, 5], [0, 10], [-5, 5], [-5, -5])}
        fill="none"
      />

      {/* Top */}

      <polygon points={points([0, -8], [3, -5], [0, -2], [-3, -5])} fill="none" />
      <polygon points={points([0, -8], [0, -6], [3, -3], [3, -5])} fill="url(#silver-metal)" />
      <polygon points={points([0, -8], [0, -6], [-3, -3], [-3, -5])} fill="url(#dark-metal)" />
      <polygon points={points([0, -2], [0, -4], [1, -5], [1, -3])} fill="url(#dark-metal)" />
      <polygon points={points([0, -2], [0, -4], [-1, -5], [-1, -3])} fill="url(#silver-metal)" />
      <polygon
        points={points([0, 0], [-5, -5], [0, -10], [5, -5], [0, 0], [0, -2], [-3, -5], [0, -8], [3, -5], [0, -2])}
        fillRule="evenodd"
        fill="url(#gold-metal)"
      />
      <polygon points={points([0, -6], [1, -5], [0, -4], [-1, -5])} fill="url(#royal)" />

      {/* Left */}

      <polygon points={points([-1, 9], [-1, 5], [-5, 1], [-5, 5])} fill="none" />
      <polygon points={points([-2, 8], [-2, 4], [-1, 3], [-1, 7])} fill="url(#dark-metal)" />
      <polygon points={points([-5, 3], [-4, 2], [-2, 4], [-3, 5])} fill="url(#gold-metal)" />
      <polygon points={points([-5, 5], [-5, 3], [-3, 5], [-3, 3], [-2, 4], [-2, 8])} fill="url(#silver-metal)" />
      <polygon points={points([-4, -2], [-1, 1], [-1, 3], [-4, 0])} fill="none" />
      <polygon points={points([-1, 3], [-4, 0], [-3, -1], [0, 2])} fill="url(#gold-metal)" />
      <polygon points={points([-4, -2], [-4, 0], [-3, -1], [-3, -3])} fill="url(#dark-metal)" />
      <polygon
        points={points([0, 0], [0, 10], [-1, 9], [-1, 5], [-5, 1], [-5, -5], [-1, -1], [-1, 1], [-4, -2], [-4, 0], [-1, 3], [-1, -1])}
        fill="url(#silver-metal)"
      />
      <polygon points={points([-3, 3], [-3, 1], [-2, 2], [-2, 4])} fill="url(#royal)" />

      {/* Right */}

      <polygon points={points([5, -1], [5, -3], [1, 1], [1, 7], [4, 4], [4, 2], [2, 4], [2, 2])} fill="none" />
      <polygon points={points([4, 2], [4, 4], [3, 3], [3, 1])} fill="url(#silver-metal)" />
      <polygon points={points([0, 6], [1, 7], [4, 4], [3, 3])} fill="url(#gold-metal)" />
      <polygon points={points([2, 4], [2, 2], [1, 1], [1, 3])} fill="url(#silver-metal)" />
      <polygon points={points([2, 2], [1, 1], [4, -2], [5, -1])} fill="url(#gold-metal)" />
      <polygon
        points={points([0, 0], [0, 10], [5, 5], [5, -1], [2, 2], [2, 4], [4, 2], [4, 4], [1, 7], [1, 1], [5, -3], [5, -5])}
        fill="url(#dark-metal)"
      />
      <polygon points={points([3, 1], [2, 2], [2, 4], [3, 3])} fill="url(#royal)" />
    </svg>
  );
}
