import React from "react"
import VirtualList from "react-tiny-virtual-list"

export default () => {
  const data = ["A", "B", "C", "D", "E", "F"]
  return (
    <VirtualList
      width="100%"
      height={600}
      itemCount={data.length}
      itemSize={50}
      renderItem={({ index, style }) => (
        <div key={index} style={style}>
          Letter: {data[index]}, Row: #{index}
        </div>
      )}
    />
  )
}
