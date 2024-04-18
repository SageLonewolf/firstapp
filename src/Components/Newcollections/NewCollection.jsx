  import React from 'react'
  import './Newcollections.css'
  import new_collections from '../Assests/new_collections'
  import Item from '../Items/Item'
  
  const NewCollection = () => {
    return (
      <div className='new-collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr />
        <div className="collections">
            {new_collections.map((item,i)=>{
                return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            } )}
        </div>
      </div>
    )
  }
  
  export default NewCollection