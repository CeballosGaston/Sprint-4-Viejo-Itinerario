import { describe, it, expect } from 'vitest'
import { weatherCodeToEmoji } from './dist/weatherEmojis.js'

describe('weatherCodeToEmoji', () => {
  it('devuelve el emoji correcto', () => {
    expect(weatherCodeToEmoji[0]).toBe('☀️')
    expect(weatherCodeToEmoji[61]).toBe('🌦️')
  })

  it('falla cuando el código no es correcto', () => {
    expect(weatherCodeToEmoji[0]).toBe('❌') 
  })
})
