"use strict";!function(){function u(t,e){document.querySelectorAll(t).forEach(function(t){return t.textContent=e})}function a(t,e){document.querySelectorAll(t).forEach(function(t){return t.textContent=e})}!function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return fetch(t,e).then(function(t){return t.json()}).catch(function(t){return console.log(t)})}("/domain"+document.location.search).then(function(t){var e,n;t.products.map(function(t){var e,n,r,o,c,i,l;u(".js-new-price",t.price),l=".js-price-minus-rub",e=t.price,document.querySelectorAll(l).forEach(function(t){t.textContent=e-1}),u(".js-old-price",t.oldPrice),l=".js-product-name",n=t.name,document.querySelectorAll(l).forEach(function(t){return t.textContent=n}),l=".js-recurrentPrice",r=t.recurrentPrice,document.querySelectorAll(l).forEach(function(t){return t.textContent=r}),a(".js-tariff1",t.tariff[0]),a(".js-tariff2",t.tariff[1]),a(".js-tariff3",t.tariff[2]),l=".js-initialInterval",o=t.initialInterval,document.querySelectorAll(l).forEach(function(t){return t.textContent=o}),l=".js-followingInterval",c=t.followingInterval,document.querySelectorAll(l).forEach(function(t){t.textContent=c}),l=".js-followingIntervalDay",i=t.followingInterval,document.querySelectorAll(l).forEach(function(t){var e=Math.floor(i/24),n=e;1===e?n=e+" день":2<=e&&e<=4?n=e+" дня":5<=e&&(n=e+" дней"),t.textContent=n}),l=t.description,$(".js-pay-description").html(l),l=t.tariffDescription,$(".prices__list-holder").append(l),t=t.id,document.getElementById("js-product-id").value=t}),e=t.trackers,(n=document.createElement("script")).innerHTML=e,document.querySelector("body").append(n),function(t){t?($(".basket__condition").hide(),$(".basket__check-input").prop("checked",!0),$(".basket__button").prop("disabled",!1),$(".basket__check2").css("display","flex")):($(".basket__check").css("display","flex"),$(".basket__condition").show());ym(80078182,"params",{ref:t})}(t.ref),n=t.legal,$(".js-legal").html(n),(t=t.clientDomain)&&($(".js-enter-btn").attr("href",t).show(),$(".js-unsubscribe").attr("href",t+"/unsubscribe"))}).catch(function(t){return console.log(t)})}();