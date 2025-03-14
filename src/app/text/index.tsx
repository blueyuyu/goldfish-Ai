"use client"
import React, { useState } from "react"

type Props = {}

const TestPage = (props: Props) => {
  type Item = {
    title: string
    content: string
    value: string
  }
  const items: Item[] = [
    {
      title: "Item 1",
      content: "This is the content of item 1",
      value: "item1",
    },
    {
      title: "Item 2",
      content: "This is the content of item 2",
      value: "item2",
    },
    {
      title: "Item 3",
      content: "This is the content of item 3",
      value: "item3",
    },
    {
      title: "Item 4",
      content: "This is the content of item 3",
      value: "item4",
    },
    {
      title: "Item 5",
      content: "This is the content of item 3",
      value: "item5",
    },
  ]
  const [seletedItem, setSeletedItem] = useState("")
  const [seletedValue, setSeletedValue] = useState("")

  const handleSelect = (item: Item) => {
    setSeletedItem(item.title)
    setSeletedValue(item.value)
  }
  return (
    <div className="grid grid-cols-3 gap-4 box-border">
      {items.map((item: Item, index) => (
        <div
          className={`${seletedItem && seletedItem === item.title ? "border-black" : ""} box-border p-2 w-[150px] h-[150px] rounded-lg bg-pink-200  border-2 border-solid hover:shadow-md`}
          onClick={() => handleSelect(item)}
          key={index}
        >
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  )
}

export default TestPage
