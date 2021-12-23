import React from "react"
import Layout from "../components/Layout"
import View from "../components/View"

const msg = () => (
  <Layout>
    <View title="Permission denied">
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </View>
  </Layout>
)

export default msg
