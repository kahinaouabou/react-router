import React from 'react'

export default function MovieAdd(props) {
    let h3Style = {
        textAlign:'center'
    }
  return (
    <div className='col col-sm-6 movie-add'>
        <h3 style={h3Style} >Add Movie</h3>
        <input type="text" placeholder='title'
        	  className='form-control input-add'
            value={props.tilte}
            onChange={(event) => props.onChangeTitle(event.target.value)}
        />
        <input type="text" placeholder='description'
          className='form-control input-add'
          value={props.description}
          onChange={(event) => props.onChangeDescription(event.target.value)}
        />
        <button className='btn btn-primary btn-add' onClick={() => props.add()}>add</button>
    </div>
  )
}
