import React, { useState } from "react"
import { hero } from "../../../dummyData"
import "./contentone.css"
import Card from "./Card"

const ContentOne = () => {
  const [items, setIems] = useState(hero)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Card key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ContentOne
