export default function Container({ children, className = '', size = 'md' }) {
  const widths = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
  }
  return (
    <div className={`mx-auto w-full px-8 sm:px-12 lg:px-20 ${widths[size]} ${className}`}>
      {children}
    </div>
  )
}
