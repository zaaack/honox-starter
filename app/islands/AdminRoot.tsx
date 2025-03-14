import { useEffect } from 'react'

export interface Props {
    // TODO
}
export function AdminRoot(props: Props) {
  useEffect(() => {
    // FIXME: 卡住超时
    // import('../admin/render').then((mod) => {
    //   mod.renderAdmin()
    // })
  }, [])
  return <div id="admin-root">aaa</div>
}
