import React from 'react';
import Graph from './Graph';
import SearchBar from './SearchBar';
import timeCheck from './timeCheck';
import closedStyles from '../styles/marketClose/App.css';
import openStyles from '../styles/marketOpen/App.css';
import { nullRemoval, parsedTime } from './dataProcessing';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      companyName: '',
      displayPrice: 0,
      marketOpen: true,
      symbol: '',
    };

    this.handleChartHover = this.handleChartHover.bind(this);
    this.handleChartLeave = this.handleChartLeave.bind(this);
    this.marketOpenCheck = this.marketOpenCheck.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSearchValChange = this.handleSearchValChange.bind(this);
  }

  componentDidMount() {
    this.marketOpenCheck();
  }

  handleChartHover(event) {
    if (event.activePayload) {
      const displayPrice = event.activePayload[0].payload.close;
      const hover = true;
      this.setState({ displayPrice, hover });
    }
  }

  handleChartLeave() {
    const { data } = this.state;
    const displayPrice = data[data.length - 1].close;
    const hover = false;
    this.setState({ hover, displayPrice });
  }

  marketOpenCheck() {
    const { openTradingHours, isWeekDay } = timeCheck();
    this.setState({
      marketOpen: (openTradingHours && isWeekDay),
    });
    setTimeout(this.marketOpenCheck, 60000);
  }

  handleSearchValChange(event) {
    const { value } = event.target;
    const symbolUpdate = {symbol: value};
    this.setState(symbolUpdate);
  }

  handleSearchSubmit(event) {
    event.preventDefault();
    const { symbol } = this.state;
    fetch(`/stock/${symbol}/price`)
    .then(res => res.json())
    .then(data => nullRemoval(data))
    .then(data => parsedTime(data))
    .then(data => this.setState({
      data: data,
      companyName: symbol.toUpperCase(),
      displayPrice: data[data.length - 1].close,
      symbol: '',
    }))
    .catch(err => console.log(err));
  }

  render() {
    const {
      handleChartHover,
      handleChartLeave,
      handleSearchSubmit,
      handleSearchValChange,
    } = this;
    const {
      data,
      companyName,
      displayPrice,
      marketOpen,
      hover,
      symbol,
    } = this.state;
    const styles = (marketOpen) ? openStyles : closedStyles;

    if (data.length) {
      return (
        <div className={styles.mainWrapper}>
          <SearchBar
            handleSearchValChange={handleSearchValChange}
            handleSearchSubmit={handleSearchSubmit}
            symbol={symbol}
          />
          <Graph
            data={data}
            companyName={companyName}
            displayPrice={displayPrice}
            marketOpen={marketOpen}
            hover={hover}
            handleChartHover={handleChartHover}
            handleChartLeave={handleChartLeave}
          />
        </div>
      );
    }
    return (
      <div className={styles.mainWrapper}>
        <SearchBar 
          handleSearchValChange={handleSearchValChange}
          handleSearchSubmit={handleSearchSubmit}
          symbol={symbol}
        />
      </div>
    );
  }
}

export default App;
