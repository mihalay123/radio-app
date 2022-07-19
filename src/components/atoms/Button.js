const Button = ({ children, onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className="w-16 h-16 border m-2 shrink-0 rounded-xl shadow-custom"
    >
      {children}
    </button>
  )
}

export default Button
