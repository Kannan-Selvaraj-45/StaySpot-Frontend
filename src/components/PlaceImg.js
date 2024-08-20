const baseURL = 'https://stayspot-backend-cd17.onrender.com';

export default function PlaceImg({ place, index = 0, className = null }) {
    if (!place.photos?.length) {
        return null;
    }
    const imgClassName = className || "w-full h-full rounded-xl sm:rounded-none object-cover";
    
    return (
        <img 
            className={imgClassName} 
            src={`${baseURL}/uploads/${place.photos[index]}`} 
            alt="Place Image" 
        />
    );
}
