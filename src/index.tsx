import * as React from "react";
import "./styles.scss";

const Package: React.FC = (Title, data) => <div className="package" >
  {Title}
  {data}
</div>;

export default Package;
