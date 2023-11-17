interface ButtonProperties {
  value: string
  className?: string
  variant: "default"| "outline"
}

const Button: React.FC<ButtonProperties> = ({ value, className, variant }) => {
  return (
    <div className={`${className} w-full flex justify-center`}>
      <div className={`w-full flex flex-row justify-center items-center px-8 py-3 ${variant === "default" ? 'bg-primary-1' : 'border boder-neutral-0 text-neutral-0'} cursor-pointer hover:bg-primary-0`}>
        <p className="button-sm text-neutral-0">{value}</p>
      </div>
    </div>
  )
}

export default Button