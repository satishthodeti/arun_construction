import React from 'react';
import './index.css';

const Calculator = () => (
  <div className="container">
    <header>
      <h1>Construction Calculator</h1>
    </header>
    <section>
      <h2>Concrete Calculation</h2>
      <table id="concrete-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Dimensions</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundation</td>
            <td>10m x 5m x 0.3m</td>
            <td>15 cubic meters</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </section>
    <section>
      <h2>Brickwork Calculation</h2>
      <table id="brickwork-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Dimensions</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Wall</td>
            <td>3m x 2.5m</td>
            <td>7500 bricks</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </section>
    <section>
      <h2>Roofing Calculation</h2>
      <table id="roofing-table">
        <thead>
          <tr>
            <th>Type</th>
            <th>Dimensions</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Slab</td>
            <td>6m x 5m</td>
            <td>30 square meters</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
    </section>
  </div>
);

export default Calculator;
