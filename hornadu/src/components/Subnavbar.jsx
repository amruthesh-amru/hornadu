function Subnavbar(props) {
  return (
    <>
      <div className="w-[70%]  my-0 mx-auto flex  gap-10 items-center justify-center p-2 bg-dark-pink text-light-black subNav">
        <h1 className="text-[2.5rem]">{props.title}</h1>
      </div>
    </>
  );
}

export default Subnavbar;
