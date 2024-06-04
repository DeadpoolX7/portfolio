

const Footer = () => {
    return (
      <footer  className=" bg-slate-500  ">
        <div className=" ">
          <p className="text-center text-xl p-5 font-serif">Website created with &#x1F9E0; and &#x2764; by
             <a href="https://bio.link/sanjushaw" target="_blank" rel="noopener noreferrer" className="ml-2 underline text-red-800 font-semibold hover:no-underline">Sanju Shaw</a>
          </p>
          <p className="text-center text-lg pb-4 font-bold">All &copy; Copyrights Reserved {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  