import React from 'react';
import logo from '../logo.png';

function keyDownHandler(event) {
	if (event.keyCode === 13) {
		document.getElementById('searchButton').click();
	}
}

const Header = (props) => {
	let searchHistoryElements = [];

	if(props.searchHistory.length > 0){
		for(let i = 0; i < props.searchHistory.length - 1; i++){
			searchHistoryElements.push(
				<option key={props.searchHistory[i]} value={props.searchHistory[i]}/>
			);
		}							
	}

	return(
		<div className='header'>
			<img className='logo' src={logo} alt='Github Profile Display Logo' />
			<h1 className='title' >Github Profiles</h1>
			<div className='userSearch'>
				<input className='searchInput' id='searchInputID'
					type="text" name="fname" placeholder="Search for a user"
					list='searchHistory'
					onChange={props.change}
					onKeyDown={keyDownHandler}
				/>
				<datalist id="searchHistory">
					{searchHistoryElements}
				</datalist>

				<button className='searchBtn' id='searchButton' onClick={props.click}>Get info</button>
			</div>
			<div className="a2a_kit a2a_kit_size_32 a2a_default_style icons-header">
				<a className="a2a_dd" href="https://www.addtoany.com/share">Social Share</a>
				<a className="a2a_button_copy_link">Copy Link</a>
			</div>
		</div>
	);
}

export default Header;