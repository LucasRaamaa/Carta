const template = data
  .map(
    (category) => `
      <div class="mb-8">
        <h3 class="text-2xl font-semibold uppercase tracking-wide">${
          category.title
        }</h3>

        ${
          category.description &&
          `
          <p class="text-2xl font-light">${category.description}</p>
        `
        }
      </div>

      <ul class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
        ${category.items
          .map(
            (item) => `
          <li>
            <div class="bg-white rounded shadow-lg overflow-hidden">
              ${
                item.image && `
                <span><img src="/_src/img/${
                  item.image || 'default.jpg'
                }" alt="" /></span>`
              }
              
              <span class="block p-4">
                <span class="flex gap-4">
                  <span class="flex-1 text-lg font-bold">${item.title}</span>
                  <span class="font-bold pt-0.5 mt-px whitespace-nowrap">${
                    item.price
                  }</span>
                </span>

                <span class="text-gray-600">${item.description}</span>
              </span>
            </div>
          </li>
        `,
          )
          .join('')}
      </ul>
    `,
  )
  .join('');

document.getElementById('content').innerHTML = template;
