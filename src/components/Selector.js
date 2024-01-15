import Radio from "./Radio";

const Selector = ({ prompt, options, currentValue, setCurrentValue }) => {
  return (
    <div>
      <h2 className="font-semibold my-[15px] text-sm md:text-base"> {`${prompt}`}</h2>
      <div className="flex flex-col [&>*:not(:first-child)]:mt-[10px] text-sm md:text-base  xl:block xl:[&>*:not(:first-child)]:ml-[10px]">
        {/*&>* selects all children, then we use not */}
        {Object.entries(options).map((arr, key) => {
          return (
            <Radio
              key={key}
              label={arr[0]}
              name={`packageSize`}
              value={arr[1]}
              currentValue={currentValue}
              setCurrentValue={setCurrentValue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Selector;
