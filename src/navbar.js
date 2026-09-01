const pages = import.meta.glob(
    './pages/**/*.html',
    {
        eager: true,
        query: '?url',
        import: 'default'
    }
)

const navigation = document.getElementById('navigation')

if (navigation) {

    const categories = {}

    Object.entries(pages).forEach(([path, url]) => {

        const parts = path.split('/')

        // ./pages/exercices/variables.html
        const category = parts[2]
        const filename = parts.at(-1)

        const name = filename
            .replace('.html', '')
            .replace(/[-_]/g, ' ')

        if (!categories[category]) {
            categories[category] = []
        }

        categories[category].push({
            name,
            url
        })
    })


    Object.entries(categories).forEach(
        ([category, categoryPages]) => {

            const li = document.createElement('li')

            const details = document.createElement('details')

            const summary = document.createElement('summary')

            summary.textContent = formatName(category)


            const ul = document.createElement('ul')

            categoryPages.forEach(page => {

                const item = document.createElement('li')

                const link = document.createElement('a')

                link.href = page.url
                link.textContent = formatName(page.name)

                item.appendChild(link)

                ul.appendChild(item)
            })


            details.appendChild(summary)
            details.appendChild(ul)

            li.appendChild(details)

            navigation.appendChild(li)
        }
    )
}


function formatName(name) {

    return name
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, letter => letter.toUpperCase())
}