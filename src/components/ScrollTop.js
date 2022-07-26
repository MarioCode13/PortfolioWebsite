import React, { useState } from 'react'

import { FaChevronCircleUp } from 'react-icons/fa'
import { FaArrowCircleUp } from 'react-icons/fa'

const ScrollTop = () => {
  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  window.addEventListener('scroll', checkScrollTop)

  return (
    <FaChevronCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? 'flex' : 'none' }}
    />
  )
}

export default ScrollTop
