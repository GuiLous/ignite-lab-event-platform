import { RocketSeatLogo } from './RocketSeatLogo'

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-gray-500 pt-[1.625rem] pb-6">
      <div className="flex items-center gap-6">
        <RocketSeatLogo />
        <span className="text-gray-300">RocketSeat - Todos os direitos reservados</span>
      </div>

      <a href="#" className="text-gray-300">
        Políticas de privacidade
      </a>
    </footer>
  )
}
