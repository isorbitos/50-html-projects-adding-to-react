import { useState } from 'react'
import classes from './ExpandingCards.module.css'

const DUMMY = [
    {
      imgUrl: 'https://images.unsplash.com/photo-1484318571209-661cf29a69c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
      description:'Explore Africa',
      id: '1'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',
      description:'Explore India',
      id: '2'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1515877154276-0e848de0d195?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1626&q=80',
      description:'Explore Europa',
      id: '3'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1574&q=80',
      description:'Explore America',
      id: '4'
    },
    {
      imgUrl: 'https://images.unsplash.com/photo-1493328967571-819121ed5085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80',
      description:'Explore Arctica',
      id: '5'
    },
  ]

  const ExpandingCards = ()=>{
    const [activePanel, setActivePanel] = useState(DUMMY[0].id)
    return(
      <div className={classes.expandingCards}>
      <div className={classes.container}>
            {DUMMY.map(panel=>{
              return(
                <div key={panel.id}
                 className={`${classes.panel} ${activePanel=== panel.id && classes.active}`}  
                 style={{backgroundImage: `url(${panel.imgUrl})`}}
                 onClick={()=> setActivePanel(panel.id)}>
                  <h3>{panel.description}</h3>
              </div>
              )
              
            })}
          </div>
          </div>
    )
  }

  export default ExpandingCards;