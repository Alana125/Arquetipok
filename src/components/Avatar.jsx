function Avatar({ src, alt, size = "medium" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`avatar ${size}`}
    />
  );
}

export default Avatar;