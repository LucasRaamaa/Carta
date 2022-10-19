const languages = [
  {
    code: 'es',
    label: 'Español',
    url: '/',
  },
  {
    code: 'ca',
    label: 'Català',
    url: '/ca',
  },
  {
    code: 'en',
    label: 'English',
    url: '/en',
  },
];

const picker = document.createElement('select');
picker.classList = 'py-1 px-2 rounded text-black';

const options = languages
  .map(({ code, label }) => {
    const match = document.documentElement.lang === code;

    return `
      <option value="${code}" ${match ? 'selected' : ''}>${label}</option>
    `;
  })
  .join('');

picker.innerHTML = options;
document.getElementById('language-picker').append(picker);

picker.addEventListener('change', function (event) {
  const path = event.target.value.toLowerCase();

  if (path === 'es') return (window.location = '/');
  window.location.pathname = `/${path}`;
});
