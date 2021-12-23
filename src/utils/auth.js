export const isBrowser = () => typeof window !== "undefined"

const getUser = () =>
  isBrowser() && window.localStorage.gatsbyUser
    ? isBrowser() && JSON.parse(window.localStorage.gatsbyUser)
    : {}

const setUser = user => isBrowser() && (window.localStorage.gatsbyUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (username === `gatsby` && password === `demo`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Jim`,
      legalName: `James K. User`,
      email: `jim@example.org`,
      admin: false,
    })
  }

  if (username === `admin` && password === `admin`) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Vezetosegi tag`,
      legalName: `A legnagyobb jampi`,
      email: `tokmindegy`,
      admin: true,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const isAdmin = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email && user.admin
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`gatsbyUser\` property exists.`)
  setUser({})
  callback()
}
