import React from "react";
import Popular from "./Popular";
import New from "./New";

export default function Wrapperd(Content) {
  return class extends React.Component {
    render() {
      if (this.props.views >= 1000)
        return (
          <Popular>
            <Content {...this.props} />
          </Popular>
        );
      if (this.props.views < 100)
        return (
          <New>
            <Content {...this.props} />
          </New>
        );
      return <Content {...this.props} />;
    }
  };
}
