import * as React from 'react'

interface Props {
  text: string
}

export const ExampleComponent = ({ text }: Props) => {
  return (
    <div>
      {' '}
      <div style={{ background: 'green', color: 'white' }}>{text} haha</div>
    </div>
  )
}
