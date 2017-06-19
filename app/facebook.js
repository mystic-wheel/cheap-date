// @flow
const loadFacebookThen = (callback: () => void) => {
  window.fbAsyncInit = function() {
    window.FB.init({
      appId            : 1986387731598775,
      autoLogAppEvents : true,
      xfbml            : false,
      version          : 'v2.9'
    })
    window.FB.AppEvents.logPageView()
    callback()
  };

  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0]
    if (d.getElementById(id)) {return}
    js = d.createElement(s); js.id = id
    js.src = '//connect.facebook.net/en_US/sdk.js'
    fjs.parentNode && fjs.parentNode.insertBefore(js, fjs)
  }(document, 'script', 'facebook-jssdk'))
}

export default loadFacebookThen
