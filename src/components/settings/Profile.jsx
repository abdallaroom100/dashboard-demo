import { User } from "lucide-react";
import SettingSection from "./SettingSection";

const Profile = () => {
	return (
		<SettingSection icon={User} title={"Profile"}>
			<div className='flex flex-col sm:flex-row items-center mb-6'>
				<img
					src='https://avatars.githubusercontent.com/u/125589119?s=400&u=2a9c389ebf32fe0f9cb84fc4f52d4e3023c7683a&v=4'
					alt='Profile'
					className='rounded-full w-20 h-20 object-cover sm:mr-4'
				/>

				<div>
					<h3 className='text-lg font-semibold text-gray-100 text-center sm:text-start'>Abdullah Ahmed</h3>
					<p className='text-gray-400'>abdallaroom25@gmail.com</p>
				</div>
			</div>

			<button className='bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto'>
				Edit Profile
			</button>
		</SettingSection>
	);
};
export default Profile;
