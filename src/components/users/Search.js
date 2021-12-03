import React, {useContext, useState} from 'react';
import GithubContext from '../../context/github/githubcontext'
import AlertContext from '../../context/alert/alertcontext'

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const [text,setText] =useState('');

  const onChange = (e) => {
    setText( e.target.value);
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(text === ''){
      alertContext.setAlert('Please enter something', 'light');
    } 
    else{
      githubContext.searchUsers(text);
      setText('');
      alertContext.setAlert('','')
    }
    
  }

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search User..."  value={text} onChange={onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block"/>
      </form>
      {githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
    </div>
  )
}

export default Search
