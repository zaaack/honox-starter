import { useEffect, useState } from 'react'
import { hc } from 'hono/client'
import type { AppType } from '../routes/api'
const client = hc<AppType>('/api')

export default function Counter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    client.books.$get().then(r=>r.json()).then(async (res) => {
      console.log('getbooks',res.result)
    })
  }, [])
  return (
    <div>
      <p className="py-2 text-2xl">{count}</p>
      <button
        className="px-4 py-2 bg-orange-400 text-white rounded cursor-pointer"
        onClick={() => {
          setCount(count + 1)
          console.log('clicked')
        }}
      >
        Increment
      </button>
    </div>
  )
}
