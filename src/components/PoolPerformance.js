import {CanvasJSChart} from 'canvasjs-react-charts'
var React = require('react');
var Component = React.Component;

// var CanvasJSReact = require('../assets/canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class PoolPerformance extends Component {
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Pool Performance - Past 5 Months"
			},
			axisY: {
				title: "Expected Interest Rate"
			},
			data: [{
				type: "boxAndWhisker",
				color: "black",
				upperBoxColor: "#A3A3A3",
				lowerBoxColor: "#494949",
				yValueFormatString: "###.0# %",
				dataPoints: [
					{ label: "LP1", y: [8.5, 8.7, 8.6, 9, 8.2] },
					{ label: "LP2", y: [9.5, 8.2, 8.2, 9.2, 9.1] },
					{ label: "LP3", y: [8.5, 9.7, 9.6, 8, 8.1] },
					{ label: "LP4", y: [10.5, 8.7, 11.6, 10, 8.2] },
					{ label: "LP5", y: [11.5, 10.2, 12.6, 10, 10.2] },
					{ label: "LP6", y: [12.5, 12.7, 12.6, 12.1, 12.3] },
					{ label: "LP7", y: [13.5, 13.7, 15.1, 14, 12.2]}
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default PoolPerformance 