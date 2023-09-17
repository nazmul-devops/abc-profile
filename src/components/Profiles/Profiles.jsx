import PropTypes from 'prop-types';
const Profiles = ({allProfiles}) => {

    return (
        <div className=''>
            <h1 className='text-2xl text-center font-bold mb-5'>Total Profiles: {allProfiles.length}</h1>
        </div>
    );
};

Profiles.propTypes ={
    allProfiles: PropTypes.array,

}
export default Profiles;