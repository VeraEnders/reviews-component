const tags = document.querySelectorAll('#tag')
const search = document.querySelector('#search')

tags.forEach(tag => tag.addEventListener('click', function(e) {
  const clicked = e.target;
  tags.forEach(tag => tag.classList.remove('bg-[#8781f9]'));
  tags.forEach(tag => tag.classList.remove('text-white'))

  clicked.classList.toggle('bg-[#8781f9]');
  clicked.classList.toggle('text-white');

  const clickedText = e.target.textContent;

  search.value = `${clickedText}`;
  search.classList.add('text-white');

}));

search.addEventListener('input', function() {
  tags.forEach(tag => {
    tag.classList.remove('bg-[#8781f9]', 'text-white');
  })
});