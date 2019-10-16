const main = document.querySelector('#main');
main.addEventListener('click', (e) => {
  const {target} = e;
  if (target.classList.contains('toogle_flip')) {
    main.classList.toggle("flip");
  };
})

const faded = document.querySelector('.terms_and_conditions');
faded.addEventListener('scroll', (event) => {
  const { target } = event;
  const {scrollTop, scrollHeight, clientHeight} = target;
  const fade = target.querySelector('.fade');
  if(scrollTop + clientHeight >= scrollHeight - 25){
    fade.classList.add('hide');
  } else {
    fade.classList.remove('hide');
  }
});