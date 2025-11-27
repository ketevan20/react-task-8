type ButtonProps = {
    text: string;
}

const Button = ({text}: ButtonProps) => {
  return (
    <button className="bg-[rgba(252,175,23,1)] px-12 py-[15px] rounded-lg font-bold text-[rgba(2,2,2,1)] text-[20px] leading-[150%] tracking-[-1.1%] hover:bg-[#c48508]">
        {text}
    </button>
  )
}

export default Button