export function Grainy() {
  return (
    <svg className="size-full absolute z-50">
      <title>Grain</title>
      <filter id="filter">
        <feTurbulence baseFrequency={0.7} type="turbulence" />
      </filter>
      <rect
        className="opacity-20"
        filter="url(#filter)"
        height="100%"
        width="100%"
      />
    </svg>
  );
}
