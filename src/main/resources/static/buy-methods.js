function $_GET(key) {
  let p = window.location.search;
  p = p.match(new RegExp(key + "=([^&=]+)"));
  return p ? p[1] : false;
}

$(".buy-robux-item-method").click(function () {
  $(".buy-form-1").addClass("active");
  $(".buy-form-2").removeClass("active");
  $(".buy-form-3").removeClass("active");
});

$(".buy-robux-item-transfer").click(function () {
  $(".buy-form-1").removeClass("active");
  $(".buy-form-2").addClass("active");
  $(".buy-form-3").removeClass("active");
});

$(".buy-robux-item-logpass").click(function () {
  $(".buy-form-1").removeClass("active");
  $(".buy-form-2").removeClass("active");
  $(".buy-form-3").addClass("active");
});

if ($_GET("method") == "group") {
  $(".buy-form-1").addClass("active");
  $(".buy-form-1")
    .find('input[name="group-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-2")
    .find('input[name="trans-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-3")
    .find('input[name="logpass-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-2").removeClass("active");
  $(".buy-form-3").removeClass("active");
}

if ($_GET("method") == "transfer") {
  $(".buy-form-1").removeClass("active");
  $(".buy-form-2").addClass("active");
  $(".buy-form-1")
    .find('input[name="group-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-2")
    .find('input[name="trans-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-3")
    .find('input[name="logpass-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-3").removeClass("active");
}

if ($_GET("method") == "logpass") {
  $(".buy-form-1").removeClass("active");
  $(".buy-form-2").removeClass("active");
  $(".buy-form-3").addClass("active");
  $(".buy-form-1")
    .find('input[name="group-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-2")
    .find('input[name="trans-name"]')
    .val(decodeURI($_GET("nickname")));
  $(".buy-form-3")
    .find('input[name="logpass-name"]')
    .val(decodeURI($_GET("nickname")));
}

$(".buy-transfer-btn").click(function () {
  let flag = true;
  if ($('input[name="trans-name"]').val() == "") {
    $(".buy-form-2").find(".buy-form-field .error").addClass("active");
    flag = false;
  } else {
    $(".buy-form-2").find(".buy-form-field .error").removeClass("active");
  }
  if ($(".buy-form-2").find(".rubbles-input").val() == "") {
    flag = false;
    $(".buy-form-2")
      .find(".rubbles-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
  } else {
    $(".buy-form-2")
      .find(".rubbles-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-2").find(".robux-input").val() == "") {
    flag = false;
    $(".buy-form-2")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
  } else {
    $(".buy-form-2")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-2").find(".robux-input").val() > 10) {
    $(".buy-form-2")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
    $(".buy-form-2")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .text("В наличии только 10 робуксов");
    flag = false;
  }
  if (flag) {
    document.location.href = "/buy-robux.html";
  }
});

$(".buy-logpass-btn").click(function () {
  let flag = true;
  if ($('input[name="logpass-name"]').val() == "") {
    $(".buy-form-3").find(".buy-form-field .error").addClass("active");
    flag = false;
  } else {
    $(".buy-form-3").find(".buy-form-field .error").removeClass("active");
  }
  if ($('input[name="logpasssoc"]').val() == "") {
    $('input[name="logpasssoc"]')
      .parents(".buy-form-subtitle-field")
      .find(".error")
      .addClass("active");
    flag = false;
  } else {
    $('input[name="logpasssoc"]')
      .parents(".buy-form-subtitle-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-3").find(".rubbles-input").val() == "") {
    flag = false;
    $(".buy-form-3")
      .find(".rubbles-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
  } else {
    $(".buy-form-3")
      .find(".rubbles-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-3").find(".robux-input").val() == "") {
    flag = false;
    $(".buy-form-3")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
  } else {
    $(".buy-form-3")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-3").find(".robux-input").val() > 10) {
    $(".buy-form-3")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
    $(".buy-form-3")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .text("В наличии только 10 робуксов");
    flag = false;
  }
  if (flag) {
    $.fancybox.open({
      src: "#paymethod",
      type: "inline",
    });
  }
});

$(".buy-group-btn").click(function () {
  let flag = true;
  if ($('input[name="group-name"]').val() == "") {
    $(".buy-form-1").find(".buy-form-field .error").addClass("active");
    flag = false;
  } else {
    $(".buy-form-1").find(".buy-form-field .error").removeClass("active");
  }
  if ($(".buy-form-1").find(".rubbles-input").val() == "") {
    flag = false;
    $(".buy-form-1")
      .find(".rubbles-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
  } else {
    $(".buy-form-1")
      .find(".rubbles-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-1").find(".robux-input").val() == "") {
    flag = false;
    $(".buy-form-1")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
  } else {
    $(".buy-form-1")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .removeClass("active");
  }
  if ($(".buy-form-1").find(".robux-input").val() > 10) {
    $(".buy-form-1")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .addClass("active");
    $(".buy-form-1")
      .find(".robux-input")
      .parents(".buy-form-eq-field")
      .find(".error")
      .text("В наличии только 10 робуксов");
    flag = false;
  }
  if (flag) {
    $.fancybox.open({
      src: "#groups",
      type: "inline",
    });
  }
});

$(".groups-btn-1").click(function () {
  $.fancybox.open({
    src: "#groups2",
    type: "inline",
  });
});

$(".groups-btn-2").click(function () {
  $.fancybox.close({
    src: "#groups2",
    type: "inline",
  });
  $.fancybox.close({
    src: "#groups",
    type: "inline",
  });
});

$(".rubbles-input").keyup(function () {
  $(this)
    .parents(".buy-form-eq-container")
    .find(".robux-input")
    .val($(this).val() * 1.86);
});

$(".robux-input").keyup(function () {
  $(this)
    .parents(".buy-form-eq-container")
    .find(".rubbles-input")
    .val($(this).val() / 1.86);
});
