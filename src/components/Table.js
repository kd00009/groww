import React from 'react';
import './Header.css';

const Table = () => {
  return (
    <div>
      <h2 className='headingt mb-0'>MORE CALCULATORS</h2>
      <table className='table table-success table-striped'>
        <tbody className='tabless'>
          <tr>
            <th scope="row"></th>
            <td className='green-bold'>personal loan</td>
            <td className='green-bold'>car loan</td>
            <td className='green-bold'>home loan</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className='green-bold'>interest rate</td>
            <td className='green-bold'>simple interest</td>
            <td className='green-bold'>compound interest</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className='green-bold'>interest rate</td>
            <td className='green-bold'>simple interest</td>
            <td className='green-bold'>compound interest</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className='green-bold'>sbi emi </td>
            <td className='green-bold'>hdfc loan emi</td>
            <td className='green-bold'>icici emi calculator</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td className='text-green green-bold'>axis bank emi </td>
            <td className='green-bold'>axis bank emi calculator</td>
            <td className='green-bold'>axis bank home loan</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
