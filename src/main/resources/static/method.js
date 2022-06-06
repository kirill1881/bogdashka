$(".robux-favorable-conditions-item-form-button").click(function () {
  if (
    $(".robux-favorable-conditions-item-form-left").find("input").val() != ""
  ) {
    document.location.href = `/buy-methods.html?nickname=${$(
      ".robux-favorable-conditions-item-form-left"
    )
      .find("input")
      .val()}&method=${$(this).attr("data-method")}`;
  } else {
    alert("Заполните никнейм");
  }
});
