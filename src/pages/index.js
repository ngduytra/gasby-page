import * as React from "react"
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'

import Layout from "../component.js/layout"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

// markup
const IndexPage = ({data}) => {
  return (
    <div>
      <Helmet>
        <title>My Title</title>
        <script type="application/ld+json">
          {`
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": "https://www.spookytech.com",
                "name": "Spooky technologies",
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+5-601-785-8543",
                  "contactType": "Customer Support"
                }
              }
            `}
        </script>
      </Helmet>
      <Layout style={pageStyles}>
        {/* <h1>Hello, my name is Duy Tra, i come from Ho Chi Minh city, Viet Nam. i was born and grown in Nghe An province.
          Now, i'm serve as fullstack developer, especially strong at Javascript. I'm familiar with Nodejs, ReactJs, MongoDB
          and Solidity in addition. I have extensive knowledge in blockchain field and have capable of working well as 
          smart contract Develper. I have worked at Zien Solution for 1 years.
        </h1> */}
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <div>{data?.site?.siteMetadata.description}</div>
        {/* <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="../images/E1oMV3QVgAIr1NT.jpg"
        /> */}
        <Link to='/tra'>Go to Tra</Link>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default IndexPage
