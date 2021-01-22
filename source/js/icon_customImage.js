function getJSONP(url, success) {
  var ud = "_" + +new Date(),
    script = document.createElement("script"),
    head = document.getElementsByTagName("head")[0] || document.documentElement;

  window[ud] = function (data) {
    head.removeChild(script);
    success && success(data);
  };

  script.src = url.replace("callback=?", "callback=" + ud);
  head.appendChild(script);
}

getJSONP(
  "https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=20224473-92dc-415f-ad95-b88d2f91cce2",
  function (data) {
    console.log(data);
  }
);

// Lazy load map

const map = document.querySelector(".address__map");

const loadMap = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  createMap();

  observer.unobserve(entry.target);
};

const mapObserver = new IntersectionObserver(loadMap, {
  root: null,
  threshold: 0,
  rootMargin: "300px",
});

mapObserver.observe(map);

const createMap = function () {
  ymaps.ready(function () {
    var myMap = new ymaps.Map(
        "map",
        {
          center: [59.938635, 30.323118],
          zoom: 16,
          controls: [],
        },
        {
          searchControlProvider: "yandex#search",
        }
      ),
      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),
      myPlacemark = new ymaps.Placemark(
        myMap.getCenter(),
        {
          hintContent: "Погнали?",
        },
        {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: "default#image",
          // Своё изображение иконки метки.
          iconImageHref: "../img/icon-map-pin.svg",
          // Размеры метки.
          iconImageSize: [54, 54],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          // iconImageOffset: [-35, -100],
        }
      );

    myMap.geoObjects.add(myPlacemark);
  });
};
