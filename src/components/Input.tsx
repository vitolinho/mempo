import mailIcon from "../../public/icons/mail.svg"

interface InputProperties {
  placeholder: string
  className?: string
}

const Input: React.FC<InputProperties> = ({ placeholder, className }) => {
  const handleIconClick = () => {
    const input = document.getElementById('input')
    if (input) {
      input.focus()
    }
  }
  return (
    <div className={`${className} w-full flex px-8 py-3 border border-neutral-1 cursor-text`}>
      <input id="input" placeholder={placeholder} className="w-full bg-transparent outline-none text-neutral-0 body-md"/>
      <img src={mailIcon} alt="icon" onClick={handleIconClick}/>
    </div>
  )
}

export default Input