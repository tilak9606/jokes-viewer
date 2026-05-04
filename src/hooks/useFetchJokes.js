import { useState, useEffect, useCallback } from 'react'

const API_URL = 'https://api.freeapi.app/api/v1/public/randomjokes'

export function useFetchJokes() {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)

  const fetchJokes = useCallback(async (pageNum = 1) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_URL}?page=${pageNum}&limit=10`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (!result.success) {
        throw new Error(result.message || 'Failed to fetch jokes')
      }

      setJokes(result.data.data)
      setPage(result.data.page)
      setTotalPages(result.data.totalPages)
      setTotalItems(result.data.totalItems)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJokes(1)
  }, [fetchJokes])

  const goToPage = useCallback((pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      fetchJokes(pageNum)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [fetchJokes, totalPages])

  const refresh = useCallback(() => {
    fetchJokes(page)
  }, [fetchJokes, page])

  return {
    jokes,
    loading,
    error,
    page,
    totalPages,
    totalItems,
    goToPage,
    refresh,
  }
}