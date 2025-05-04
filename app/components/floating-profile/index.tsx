import "./styles.css";

export function FloatingProfile() {
  return (
    <div className="floating-border border-8">
      <img
        src="/home/profile.jpeg"
        alt="Dima Portenko"
        className="w-[250px] h-[250px] object-cover"
      />
    </div>
  );
}
