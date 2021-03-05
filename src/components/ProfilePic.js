import React from 'react';
import './ProfilePic.css';
import profile from '../assets/images/profile-cropped2.jpg';

function ProfilePic() {
	return (
		<div>
			<a href="/contact">
				<img className="sticky" src={profile} alt="" />
			</a>
		</div>
	);
}

export default ProfilePic;
