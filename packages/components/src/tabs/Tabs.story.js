import React from 'react';
import Tabs from './Tabs';
import Alert from '../alert';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const basic = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Tabs.SpacerSizes.MEDIUM}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <Alert message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique" />
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <Alert
              type="warning"
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"
            />
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <Alert
              type="negative"
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"
            />
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};

export const blockTabHeaderWidth = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Tabs.SpacerSizes.MEDIUM}
      headerWidth={Tabs.HeaderWidth.AUTO}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <Alert message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique" />
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <Alert
              type="warning"
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"
            />
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <Alert
              type="negative"
              message="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique"
            />
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};
