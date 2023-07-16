import { useMemo } from "react";
import classes from "./DemoList.module.css";
import PropTypes from "prop-types";

const DemoList = (props) => {
  const { items } = props;

  const sortedList = useMemo(() => {
    console.log("items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList Running");

  return (
    <div className={classes.list}>
      <h2>{props.title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

DemoList.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default DemoList;
