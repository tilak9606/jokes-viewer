import { Quote, Tag } from 'lucide-react'

function JokeCard({ joke, index }) {
  const hasCategories = joke.categories && joke.categories.length > 0

  return (
    <div
      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 animate-slide-up group"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-1">
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
            <Quote className="w-5 h-5 text-amber-600" />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-slate-800 text-base leading-relaxed font-medium">
            {joke.content}
          </p>

          {hasCategories && (
            <div className="flex flex-wrap gap-2 mt-4">
              {joke.categories.map((category) => (
                <span
                  key={category}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
                >
                  <Tag className="w-3 h-3" />
                  {category}
                </span>
              ))}
            </div>
          )}

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-slate-400 font-medium">
              Joke #{joke.id}
            </span>
            {!hasCategories && (
              <span className="text-xs text-slate-400">General</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default JokeCard