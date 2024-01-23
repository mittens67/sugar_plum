import GridLoader from "react-spinners/GridLoader";

const override = {
  display: "block",
  margin: "0 auto"
};

const Loader = () => {
    const color = "#ba125860";

  return (
    <div className="min-h-[80vh] flex flex-1 items-center">
      <GridLoader
        color={color}
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loader