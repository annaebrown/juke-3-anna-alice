import React from 'react';


const NewPlaylist = (props) => {
        

		return (
		<div className="well">
		  <form className="form-horizontal" onSubmit={props.onSubmit}>
		    <fieldset>
		      <legend>New Playlist</legend>
		      <div className="form-group">
		        <label className="col-xs-2 control-label">Name</label>
		        <div className="col-xs-10">
		        {
		        	props.alertMessage && <div className="alert alert-warning">{props.alertMessage}</div>
		    	}
		         <input className="form-control" type="text" onChange= {props.onChange} value={props.inputValue} />
		        
		        </div>
		      </div>
		      <div className="form-group">
		        <div className="col-xs-10 col-xs-offset-2">
		          <button type="submit" disabled = {props.inputValue.length > 16 || !props.inputValue} className="btn btn-success">Create Playlist</button>
		        </div>
		      </div>
		    </fieldset>
		  </form>
		</div>
		)

}


export default NewPlaylist
