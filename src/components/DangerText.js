

const DangerText = ({ tag: Tag = 'span', children }) => {
  return (
    <>
      <b><Tag className="text-danger m-2">{children}</Tag></b>
    </>
  )
}

export default DangerText