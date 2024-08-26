export function Footer(){
  return (
    <footer className="text-[#656e76] bg-black">
    <div className="p-12">
      <p className='mb-4 text-center md:text-start'>Dúvidas? Ligue 0800 591 2876</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-start">
        <ul>
          <li className="pb-3">Perguntas frequentes</li>
          <li className="pb-3">Relações com investidores</li>
          <li className="pb-3">Formas de assistir</li>
          <li className="pb-3">Informações corporativas</li>
          <li className="pb-3">Só na Netflix</li>
        </ul>
        <ul>
          <li className="pb-3">Centro de ajuda</li>
          <li className="pb-3">Carreiras</li>
          <li className="pb-3">Termos de uso</li>
          <li className="pb-3">Entre em contato</li>
        </ul>
        <ul>
          <li className="pb-3">Conta</li>
          <li className="pb-3">Resgatar cartão pré-pago</li>
          <li className="pb-3">Privacidade</li>
          <li className="pb-3">Teste de velocidade</li>
        </ul>
        <ul>
          <li className="pb-3">Media Center</li>
          <li className="pb-3">Comprar cartão pré-pago</li>
          <li className="pb-3">Preferências de cookies</li>
          <li className="pb-3">Avisos legais</li>
        </ul>
      </div>
      <p className='mt-4 text-center md:text-start'>Netflix Brasil</p>
    </div>
  </footer>
  )
}