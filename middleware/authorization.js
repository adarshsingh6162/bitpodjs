import userUtils from '~/utility/userApps'
import { appList } from '~/config/apps/list'
import { intersection } from '~/utility/object.js'

const isValidPage = (store, route) => {
  if (!route.params.app) {
    return true
  }
  const userCurrentOrg = userUtils.userCurrentOrgInfo(store) || {}
  const userRoles = userCurrentOrg.roles || []
  if (
    userRoles.includes('$orgowner') &&
    userCurrentOrg &&
    userCurrentOrg.id === 1
  ) {
    return true
  }
  const currentRouteApp =
    appList.find(({ name }) => name === route.params.app) || {}
  const currentRouteAppRoles = currentRouteApp.roles || []
  const isAuthorizedApp =
    intersection(currentRouteAppRoles, userRoles).length > 0
  return isAuthorizedApp
}

export default function (context) {
  const { store, route, redirect, $auth } = context
  // If the user is not authorized
  console.log('in auth ', process.server)

  if (process.server) {
    const { req } = context
    const hostName = req.headers.host
    const publicDomain = process.env.PUBLIC_DOMAIN
    console.log('hostName', Object.keys(req))
    console.log('PUBLIC_PATH', process.env.PUBLIC_DOMAIN)
    if (hostName === publicDomain) {
      const provider = $auth.strategy.name
      console.log('provider', provider)
      const currentOrgName = store.state.currentOrg.name
      const basePath = process.env.PUBLIC_PATH || ''
      return redirect(`http://${currentOrgName}-${publicDomain}${basePath}`)
    }
  }
  if (!isValidPage(store, route)) {
    return redirect('/unauthorized')
  }
}
