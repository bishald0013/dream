import React from 'react'



function CheckOutItem({prod}) {
  return (
           
      <ul class="list-group mb-3">
          <li class="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 class="my-0">{prod.title}</h6>
              <small class="text-muted">{prod.description}</small>
            </div>
            <span class="text-muted">{prod.price}</span>
          </li>
        </ul> 
  )
}

export default CheckOutItem