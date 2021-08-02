import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'

function setupRtl() {
  configure({
    testIdAttribute: 'data-test'
  })
}

setupRtl()
