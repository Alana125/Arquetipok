function Avatar({ src, alt, size = "medium" }) {
  const defaultAvatar = 'https://via.placeholder.com/80?text=Usu%C3%A1rio';
  const srcToUse = src || defaultAvatar;
  return (
    <img
      src={srcToUse}
      alt={alt || 'Usuário'}
      className={`avatar ${size}`}
    />
  );
}

export default Avatar;