import { expect } from 'vitest'
import { invoke } from './index.js'
import { test } from 'vitest'

test('invoke', () => {
  const result = invoke(() => {
    return 'hello'
  })

  expect(result).toBe('hello')
})
