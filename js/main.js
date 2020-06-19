document.getElementById("timezone").value = Intl.DateTimeFormat().resolvedOptions().timeZone
document.getElementById("nav-sign-up").href = `https://s.${location.host}/sign-up`
document.getElementById("nav-login").href = `https://s.${location.host}/`

$("#sign-up-form").submit(function(e) {
  e.preventDefault();
  const form = $(this);
  form.parent().addClass("m-signing-up")
  const url = `https://private.${location.host}/sign-up`;
  $("#reg-email").text($("#email").val());
  $.ajax({
    type: "POST",
    url: url,
    data: form.serialize(),
    success: function()
    {
      form.parent().removeClass("m-signing-up")
      form.parent().addClass("m-signed-up")
    }
  });
});
