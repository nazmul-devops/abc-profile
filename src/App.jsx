
import { useEffect, useState } from 'react'
import './App.css'
import Profiles from './components/Profiles/Profiles'

function App() {

  const [allProfiles, setAllProfiles] = useState([]);

  useEffect(() => {
    fetch('http://43.204.210.36:8002/api/posts/')
    .then(res => res.json())
    .then(data => setAllProfiles(data))
  }, [])

  return (
    <div className='container mx-auto my-8'>

      <h1 className='text-3xl text-center font-bold mb-6'>React ABC Profile</h1>

      <Profiles allProfiles={allProfiles}></Profiles>

      <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
      {
        allProfiles.map(profile => <div className='bg-gray-100 rounded-xl shadow-xl px-5' key={profile.id}>
                <div className='flex justify-center'>
                  <img className='w-[300px] h-[320px] my-5 rounded-lg shadow-lg' src={profile.post_image} alt="" />
                </div>
                <div className='text-center space-y-2'>
                  <h2 className='text-2xl font-semibold'>{profile.post_title}</h2>
                  <p className='text-lg text-gray-600 font-semibold'>{profile.post_designation}</p>
                  <p className='text-base pb-5'>{profile.post_des}</p>
                </div>
        </div>)
      }
      </div>

      
    </div>
  )
}

export default App
