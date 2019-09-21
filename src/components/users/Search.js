import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')
    

    const handleChange = e => {
        setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(text === ''){
            alertContext.setAlert('Please enter something', 'light')
        } else {
            githubContext.searchUsers(text)
            setText('');
        }
    }
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" value={text} name="text" onChange={handleChange} placeholder="Search Users..."/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {
                    githubContext.users.length > 0 &&
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
                }
            </div>
        )
}

export default Search
