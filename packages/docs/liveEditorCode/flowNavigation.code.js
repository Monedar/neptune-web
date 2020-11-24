() => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [closed, setClosed] = React.useState(false);

  return !closed ? (
    <FlowNavigation
      avatar={
        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
          <ProfileIcon />
        </Avatar>
      }
      onClose={() => setClosed(true)}
      onGoBack={() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0)}
      stepper={{
        activeStep,
        steps: [
          {
            label: 'Amount',
            hoverLabel: (
              <>
                <div>
                  <strong>100 GBP</strong>
                </div>
                0.2351 ETH
              </>
            ),
            onClick: () => setActiveStep(0),
          },
          {
            label: 'My details',
            hoverLabel: (
              <>
                <div>
                  <strong>Elena Durante</strong>
                </div>
                elenadurante@test.com
              </>
            ),
            onClick: () => setActiveStep(1),
          },
          { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
          { label: 'Something', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        ],
      }}
    />
  ) : null;
};
