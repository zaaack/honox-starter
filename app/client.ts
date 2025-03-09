import { createClient } from 'honox/client'

createClient({
  hydrate: async (elem, root) => {
    const { hydrateRoot } = await import('react-dom/client')
    console.log('elem',root, elem)
    hydrateRoot(root, elem as any)
  },
  createElement: async (type: any, props: any) => {
    const { createElement } = await import('react')
    return createElement(type, props) as any
  },
})
