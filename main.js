
let propsAnim01 = anime({
  targets: '.props .box',
  translateX: 500,
  rotate: 180,
  autoplay: false,
  borderRadius: [0, '50%'],
  color: '#000000',
  easing: 'easeInOutQuad',
  autoplay: false,
})



let targsBtn01 = document.getElementById('targsBtn01')
targsBtn01.onclick = propsAnim01.play
