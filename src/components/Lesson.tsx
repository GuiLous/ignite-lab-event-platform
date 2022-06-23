import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
  const isLessonAvailable = isPast(availableAt)

  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    },
  )

  return (
    <a href={slug}>
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="mt-2 rounded border border-gray-500 p-4">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm  font-medium text-blue-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm  font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className="rounded border border-green-300 py-[0.125rem] px-2 text-xs font-bold text-white">
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="mt-5 block text-gray-200">{title}</strong>
      </div>
    </a>
  )
}
