import { useEffect } from 'react'

export interface Props {
    // TODO
}
export function AdminRoot(props: Props) {
  useEffect(() => {
    // FIXME: 卡住超时
    if (import.meta.env.MODE !== 'server') {
      import('./admin/render').then((mod) => {
        mod.renderAdmin('admin-root')
      })
    }
  }, [])
  return <div id="admin-root">aaa</div>
}
