import React from 'react';
import { shallow } from 'enzyme';
import GriddleSettings from '../griddle_settings';
import { expect } from 'chai';
const { describe, it } = global;

describe('GriddleSettings', () => {
  it('should contain the given data', () => {
    const testData = [
      { start: '12:00 am', rate: 0.650, target: 100, carbRatio: 12, insulinSensitivity: 60 },
      { start: '5:00 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 50 },
      { start: '7:00 am', rate: 0.800, target: 100, carbRatio: 12, insulinSensitivity: 70 },
      { start: '11:30 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 65 },
      { start: '10:00 pm', rate: 0.650, target: 120, carbRatio: 12, insulinSensitivity: 60 },
    ];
    const wrapper = shallow(<GriddleSettings data={testData} />);
    expect(wrapper.props().results).to.be.equal(testData);
  });
});
