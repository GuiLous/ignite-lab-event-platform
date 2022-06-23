import { DiscordLogo, Lightning } from 'phosphor-react'

export function Video() {
  return (
    <div className="flex-1">
      <div className="flex justify-center bg-black">
        <div className="aspect-video h-full max-h-[60vh] w-full max-w-[1100px] bg-slate-900"></div>
      </div>

      <div className="mx-auto max-w-[1100px] p-8">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">Aula 01 - Abertura do Ignite Lab</h1>

            <p className="mt-4 leading-relaxed text-gray-200">
              Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação
              utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do
              nosso projeto no GraphCMS criando as entidades da aplicação e integrando a
              API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo
              Client.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <img
                className="h-16 w-16 rounded-full border-2 border-blue-500"
                src="https://github.com/GuiLous.png"
                alt=""
              />

              <div className="leading-relaxed">
                <strong className="block text-2xl font-bold">Guilherme Lourenço</strong>
                <span className="block text-sm text-gray-200">Web Developer</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href=""
              className="flex items-center justify-center gap-2 rounded bg-green-500 p-4 text-sm font-bold uppercase transition-colors hover:bg-green-700"
            >
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a
              href=""
              className="flex items-center justify-center gap-2 rounded border border-blue-500 p-4 text-sm font-bold uppercase text-blue-500 transition-colors hover:bg-blue-500 hover:text-gray-900"
            >
              <Lightning size={24} />
              Acesse o Desafio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
