import logo from '/images/logo-small.svg'
import arrow from '/images/arrow_drop_down.svg'
import Button from '../Button/Button'
import search from '/images/search.png'
import person from '/images/person.png'

export const Header = () => {
  return (
    <div className="w-screen h-28 bg-[rgba(2,2,2,1)] flex items-center justify-center">
      <div className="w-[1160px] flex justify-between">

        <div className='flex gap-[47px] items-center'>
          <img src={logo} alt="" />
          <div className='flex gap-6'>
            <div className='flex items-center'>
              <p className="text-[rgba(255,255,255,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%] hover:text-[rgba(252,175,23,1)] hover:cursor-pointer">Jogos</p>
              <img src={arrow} alt="" />
            </div>
            <p className="text-[rgba(255,255,255,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%] hover:text-[rgba(252,175,23,1)] hover:cursor-pointer">Loja</p>
            <p className="text-[rgba(255,255,255,1)] font-medium text-[16px] leading-[150%] tracking-[-1.1%] hover:text-[rgba(252,175,23,1)] hover:cursor-pointer">Ajuda</p>
          </div>
        </div>

        <div className='flex gap-6 items-center'>
          <Button text='Baixe o Launcher' />

          <div className='w-12 h-12 bg-[rgba(90,90,90,1)] rounded-full flex items-center justify-center hover:bg-[#454545] hover:cursor-pointer'>
            <img src={search} alt="" />
          </div>

          <div className='w-12 h-12 bg-[rgba(90,90,90,1)] rounded-full flex items-center justify-center hover:bg-[#454545] hover:cursor-pointer'>
            <img src={person} alt="" />
          </div>
        </div>

      </div>

    </div>
  )
}
