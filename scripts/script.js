const app = (() => {
    const dom_strings = {
        add_link_btn: document.getElementById('add_link'),
        article_empty_links: document.getElementById('empty_links')
    }

    // Functions
    const clean_view = () => {
        if(dom_strings.article_empty_links.classList.contains('display')) {

        } else {
            dom_strings.article_empty_links.classList.toggle('display')
        }
    }

    // Event listeners
    dom_strings.add_link_btn.addEventListener('click', () => {
        clean_view()
    })

    return {
        init: () => console.log('App started...')
    }
})()


app.init()