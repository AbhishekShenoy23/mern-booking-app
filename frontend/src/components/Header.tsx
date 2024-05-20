const Header = () => {
  return (
    <div className="bg-blue-600">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-white text-3xl tracking-tight font-bold py-4">
          Booking.com
        </h2>
        <button className="border p-1 rounded-md bg-white text-blue-500 font-semibold hover:bg-green-100  transition">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Header;
