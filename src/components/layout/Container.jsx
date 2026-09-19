export default function Container({ className = '', children, max = 'max-w-[1450px]' }) {
  return <div className={`mx-auto w-full px-4 ${max} ${className}`}>{children}</div>;
}
