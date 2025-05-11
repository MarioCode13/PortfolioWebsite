import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

function SlideShow() {
  const [index, setIndex] = useState(0)
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: ASC }
          filter: { relativeDirectory: { eq: "pirelli" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fluid(maxWidth: 1920) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
                # Optionally add smaller sizes for mobile (maxWidth: 768px for example)
                small: fluid(maxWidth: 768) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `
  )

  // Minus 1 for array offset from 0
  const length = allFile.edges.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = allFile.edges[index]

  return (
    <div>
      <div
        id="burger-image"
        className="image main"
        style={{
          width: '100%',
          // display: 'flex',
          // justifyContent: 'center',
        }}
      >
        <Img
          fluid={node.childImageSharp.fluid}
          key={node.id}
          alt={node.name.replace(/-/g, ' ').substring(2)}
          style={{
            maxHeight: '200px',
            maxWidth: '120px',
            margin: 'auto',
          }}
        />
      </div>
      <div id="slider-button">
        <button
          onClick={() => handlePrevious()}
          className="fa fa-caret-left"
        ></button>
        <button
          onClick={() => handleNext()}
          className="fa fa-caret-right"
        ></button>
      </div>
    </div>
  )
}
export default SlideShow
