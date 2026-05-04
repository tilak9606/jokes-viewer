import { useFetchJokes } from '../hooks/useFetchJokes.js'
import JokeCard from './JokeCard.jsx'
import Pagination from './Pagination.jsx'
import LoadingSpinner from './LoadingSpinner.jsx'
import ErrorMessage from './ErrorMessage.jsx'
import { RefreshCw, Laugh } from 'lucide-react'

function JokeList() {
  const { jokes, loading, error, page, totalPages, totalItems, goToPage, refresh } = useFetchJokes()

  if (loading && jokes.length === 0) {
    return <LoadingSpinner />
  }

  if (error) {
    return <ErrorMessage message={error} onRetry={refresh} />
  }

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <Laugh className="w-4 h-4" />
          <span className="font-medium">{totalItems}</span> total jokes
        </div>
        <button
          onClick={refresh}
          disabled={loading}
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 disabled:opacity-50 transition-colors cursor-pointer"
        >
          <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          Refresh
        </button>
      </div>

      <div className="space-y-4">
        {jokes.map((joke, index) => (
          <JokeCard key={joke.id} joke={joke} index={index} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          totalItems={totalItems}
          onPageChange={goToPage}
        />
      )}
    </div>
  )
}

export default JokeList