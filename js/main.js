document.getElementById("timezone").value = Intl.DateTimeFormat().resolvedOptions().timeZone
document.getElementById("nav-sign-up").href = `https://s.${location.host}/sing-up`
document.getElementById("nav-login").href = `https://s.${location.host}/`
document.getElementById("sign-up-form").action = `https://private.${location.host}/sign-up`

