function Subnavbar(props) {
  return (
    <>
      <div className="md:w-[70%] w-[90%]  my-0 mx-auto flex  gap-10 items-center justify-center p-2 bg-dark-pink text-light-black subNav">
        <h1 className="md:text-[2.5rem] text-[2rem]">{props.title}</h1>
      </div>
    </>
  );
}

export default Subnavbar;
