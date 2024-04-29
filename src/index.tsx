import * as React from "react";
import { render } from "react-dom";
import { Main } from "./main";

Main.bootstrap().then((main) => {
	main.application.authUser();
});

export class Parent extends React.Component<any, any> {
	incrementCounter: any;

	setIncrementCounterFunction = (incrementCounter: () => number) => {
		this.incrementCounter = incrementCounter;
	};

	onClick = () => {
		this.incrementCounter && this.incrementCounter();
	};

	render() {
		return (
			<>
				<button onClick={this.onClick}>Click Me</button>
				<Child setIncrementCounterFunction={this.setIncrementCounterFunction} />
			</>
		);
	}
}

interface ChildProps {
	setIncrementCounterFunction?: (incrementCounter: () => number) => void;
}

class Child extends React.Component<ChildProps, { clickCount: number }> {
	constructor(props: ChildProps) {
		super(props);
		this.state = { clickCount: 0 };
		this.props.setIncrementCounterFunction &&
			this.props.setIncrementCounterFunction(this.incrementCounter);
	}

	incrementCounter = () => {
		this.setState({ clickCount: this.state.clickCount + 1 });
		return this.state.clickCount;
	};

	render() {
		return (
			<span
				style={{
					paddingLeft: "1em"
				}}>{`Clicked ${this.state.clickCount}`}</span>
		);
	}
}

class App extends React.Component {
	render() {
		return <Parent />;
	}
}

render(<App />, document.getElementById("root"));
