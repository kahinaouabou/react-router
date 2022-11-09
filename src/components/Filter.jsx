import React from 'react';

const Filter = (props) => {
    
	return (
		<div className='col col-sm-4 filter-app' >
			<input
				className='form-control input-filter'
				value={props.filter}
				onChange={(event) => props.onChange(event.target.value)}
				placeholder='Filter...'
			></input>
            <button className='btn btn-primary' onClick={() => props.search()}>Search</button>
		</div>
	);
};

export default Filter;