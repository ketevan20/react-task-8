import { useNavigate } from "react-router-dom";
import Button from "../Button/Button"

const Help = () => {
  const navigate = useNavigate();

  const GoBack = () => {
    navigate("/")
  }
  return (
    <div className="w-screen h-full min-h-screen bg-[rgba(16,16,16,1)]">
      <Button text="Go Back" clickFunction={GoBack} />
    </div>
  )
}

export default Help