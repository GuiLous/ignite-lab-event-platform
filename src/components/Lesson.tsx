import { Link, useParams } from 'react-router-dom'

import classNames from 'classnames'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'

import { RectanglePin } from './RectanglePin'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ availableAt, slug, title, type }: LessonProps) {
  const { slug: slugPath } = useParams<{ slug: string }>()

  const isLessonAvailable = isPast(availableAt)

  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slugPath === slug
  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>
      <div
        className={classNames(
          'mt-2 rounded border border-gray-500 p-4 group-hover:border-green-500',
          {
            'relative bg-green-500': isActiveLesson,
          },
        )}
      >
        <RectanglePin />
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'flex items-center gap-2 text-sm  font-medium text-blue-500',
                {
                  'text-white': isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm  font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'rounded border border-green-300 py-[0.125rem] px-2 text-xs font-bold text-white',
              {
                'border-white': isActiveLesson,
              },
            )}
          >
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('mt-5 block', {
            'text-white': isActiveLesson,
            'text-gray-200': !isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  )
}
