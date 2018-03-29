anime.timeline({
    loop: true
  })

  .add({
    targets: '.moving-text .text-1',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: function (el, i) {
      return 150 * (i + 1)
    }
  }).add({
    targets: '.moving-text .text-1',
    opacity: 0,
    duration: 1250,
    easing: "easeOutExpo",
    delay: 500
  })

  .add({
    targets: '.moving-text .text-2',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: function (el, i) {
      return 150 * (i + 1)
    }
  }).add({
    targets: '.moving-text .text-2',
    opacity: 0,
    duration: 1250,
    easing: "easeOutExpo",
    delay: 500
  })

  .add({
    targets: '.moving-text .text-3',
    opacity: [0, 1],
    easing: "easeInOutQuad",
    duration: 2000,
    delay: function (el, i) {
      return 150 * (i + 1)
    }
  }).add({
    targets: '.moving-text .text-3',
    opacity: 0,
    duration: 1250,
    easing: "easeOutExpo",
    delay: 500
  })

