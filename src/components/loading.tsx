export function Loader() {
  return (
    <div
      className="flex justify-center items-center min-h-[720px] space-y-10 "
      style={{
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
      }}
    >
      <div className="flex gap-2">
        <span className="sr-only">Loading...</span>
        <div
          className="h-8 w-8 rounded-full animate-bounce-sequential"
          style={{
            animationDelay: "-0.3s",
            backgroundColor: "hsl(var(--foreground))",
          }}
        ></div>
        <div
          className="h-8 w-8 rounded-full animate-bounce-sequential"
          style={{
            animationDelay: "-0.15s",
            backgroundColor: "hsl(var(--foreground))",
          }}
        ></div>
        <div
          className="h-8 w-8 rounded-full animate-bounce-sequential"
          style={{
            backgroundColor: "hsl(var(--foreground))",
          }}
        ></div>
      </div>
    </div>
  );
}
