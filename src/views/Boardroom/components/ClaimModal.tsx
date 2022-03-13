import React, { useCallback, useMemo, useState } from 'react';

import { Button, Typography } from '@material-ui/core';
import Modal, { ModalProps } from '../../../components/Modal';
import ModalActions from '../../../components/ModalActions';
import ModalTitle from '../../../components/ModalTitle';

interface ClaimModalProps extends ModalProps {
  onConfirm: () => void;
}

const ClaimModal: React.FC<ClaimModalProps> = ({ onConfirm, onDismiss }) => {

  return (
    <Modal>
      <ModalTitle text={`Claim Rewards`} />
      <Typography style={{'textAlign': 'center'}}>
        You are about to claim your APEX rewards. 
        However, please understand that the printer only runs when APEX is above peg. 
        Selling any APEX rewards right now might cause the protocol to stop paying out any further rewards. 
        To support the Apex protocol we advice you not to sell your APEX just yet (at Spooky Swap) and wait for a more healthy TWAP value.
      </Typography>
      <ModalActions>
        <Button color="primary" variant="contained" onClick={() => onConfirm()}>
          Confirm
        </Button>
        {/* <Button text="Cancel" variant="secondary" onClick={onDismiss} />
        <Button text="Confirm" onClick={() => onConfirm(val)} /> */}
      </ModalActions>
    </Modal>
  );
};

export default ClaimModal;
