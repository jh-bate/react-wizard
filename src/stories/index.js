import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Button from '../index';
import DataGridSettings from '../datagrid_settings';
import GriddleSettings from '../griddle_settings';
import JsonTableSettings from '../jsontable_settings';
import ReactableSettings from '../reactable_settings';


storiesOf('Button', module)
  .add('default view', () => (
    <Button onClick={ action('button clicked') }>Hello</Button>
  ))
  .add('some emojies as the text', () => (
    <Button>😀 😎 👍 💯</Button>
  ))
  .add('custom styles', () => {
    const style = {
      fontSize: 20,
      textTransform: 'uppercase',
      color: '#FF8833',
    };
    return (
      <Button style={ style }>Hello</Button>
    );
  });

storiesOf('DataGridSettings', module)
  .add('data', () => {
    const columns = [
      { name: 'start', type: 'number', title: 'Start time' },
      { name: 'rate', type: 'number', title: 'Basal rates (U/h)' },
      { name: 'target', type: 'number', title: 'BG target (mg/Dl)' },
      { name: 'carbRatio', type: 'number', title: 'Insulin : Carb (g)' },
      { name: 'insulinSensitivity', type: 'number', title: 'Sensitivity (mg/Dl/U)' },
    ];
    const data = [
      { start: '12:00 am', rate: 0.650, target: 100, carbRatio: 12, insulinSensitivity: 60 },
      { start: '5:00 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 50 },
      { start: '7:00 am', rate: 0.800, target: 100, carbRatio: 12, insulinSensitivity: 70 },
      { start: '11:30 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 65 },
      { start: '10:00 pm', rate: 0.650, target: 120, carbRatio: 12, insulinSensitivity: 60 },
    ];

    return (
      <DataGridSettings data={ data } columns={ columns } />
    );
  });

storiesOf('GriddleSettings', module)
  .add('data', () => {
    const columns = [
      { columnName: 'start', displayName: 'Start time' },
      { columnName: 'rate', displayName: 'Basal rates (U/h)' },
      { columnName: 'target', displayName: 'BG target (mg/Dl)' },
      { columnName: 'carbRatio', displayName: 'Insulin : Carb (g)' },
      { columnName: 'insulinSensitivity', displayName: 'Sensitivity (mg/Dl/U)' },
    ];
    const data = [
      { start: '12:00 am', rate: 0.650, target: 100, carbRatio: 12, insulinSensitivity: 60 },
      { start: '5:00 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 50 },
      { start: '7:00 am', rate: 0.800, target: 100, carbRatio: 12, insulinSensitivity: 70 },
      { start: '11:30 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 65 },
      { start: '10:00 pm', rate: 0.650, target: 120, carbRatio: 12, insulinSensitivity: 60 },
    ];

    return (
      <GriddleSettings data={ data } columns={ columns } />
    );
  });

storiesOf('JsonTableSettings', module)
  .add('data', () => {
    const columns = [
      { key: 'start', label: 'Start time' },
      { key: 'rate', label: 'Basal rates (U/h)' },
      { key: 'target', label: 'BG target (mg/Dl)' },
      { key: 'carbRatio', label: 'Insulin : Carb (g)' },
      { key: 'insulinSensitivity', label: 'Sensitivity (mg/Dl/U)' },
    ];
    const data = [
      { start: '12:00 am', rate: 0.650, target: 100, carbRatio: 12, insulinSensitivity: 60 },
      { start: '5:00 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 50 },
      { start: '7:00 am', rate: 0.800, target: 100, carbRatio: 12, insulinSensitivity: 70 },
      { start: '11:30 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 65 },
      { start: '10:00 pm', rate: 0.650, target: 120, carbRatio: 12, insulinSensitivity: 60 },
    ];

    return (
      <JsonTableSettings data={ data } columns={ columns } />
    );
  });

storiesOf('ReactableSettings', module)
  .add('data', () => {
    const columns = [
      { key: 'start', label: 'Start time' },
      { key: 'rate', label: 'Basal rates (U/h)' },
      { key: 'target', label: 'BG target (mg/Dl)' },
      { key: 'carbRatio', label: 'Insulin : Carb (g)' },
      { key: 'insulinSensitivity', label: 'Sensitivity (mg/Dl/U)' },
    ];
    const data = [
      { start: '12:00 am', rate: 0.650, target: 100, carbRatio: 12, insulinSensitivity: 60 },
      { start: '5:00 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 50 },
      { start: '7:00 am', rate: 0.800, target: 100, carbRatio: 12, insulinSensitivity: 70 },
      { start: '11:30 am', rate: 0.700, target: 110, carbRatio: 12, insulinSensitivity: 65 },
      { start: '10:00 pm', rate: 0.650, target: 120, carbRatio: 12, insulinSensitivity: 60 },
    ];

    return (
      <ReactableSettings data={ data } columns={ columns } />
    );
  });
