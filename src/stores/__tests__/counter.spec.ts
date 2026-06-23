import { beforeEach, describe, expect, it } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'

import { useCounterStore } from '@/stores/counter'

describe('counter store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts at zero', () => {
    const counter = useCounterStore()
    expect(counter.count).toBe(0)
    expect(counter.doubled).toBe(0)
  })

  it('increments and computes doubled', () => {
    const counter = useCounterStore()
    counter.increment()
    counter.increment()
    expect(counter.count).toBe(2)
    expect(counter.doubled).toBe(4)
  })

  it('resets the count', () => {
    const counter = useCounterStore()
    counter.increment()
    counter.reset()
    expect(counter.count).toBe(0)
  })
})
