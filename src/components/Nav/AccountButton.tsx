import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { useWallet } from 'use-wallet';
import styled from 'styled-components';
import useModal from '../../hooks/useModal';
import WalletProviderModal from '../WalletProviderModal';
import AccountModal from './AccountModal';

interface AccountButtonProps {
  text?: string;
}

const CustomBtn = styled(Button)`
    border-radius: 12px!important;
    border-color: #1FE7ABFF !important;
    color: #fff !important;
    margin: 5px 5px !important;
    padding: 12px !important;
    min-width: 100% !important;
    height: 45px;
    font-size: 14px !important;
    &:hover {
      background-color: #5337c4 !important;
    }
  `;

const AccountButton: React.FC<AccountButtonProps> = ({ text }) => {
  const { account } = useWallet();
  const accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
  const [onPresentAccountModal] = useModal(<AccountModal />);

  const [isWalletProviderOpen, setWalletProviderOpen] = useState(false);

  const handleWalletProviderOpen = () => {
    setWalletProviderOpen(true);
  };

  const handleWalletProviderClose = () => {
    setWalletProviderOpen(false);
  };

  const buttonText = text ? text : 'Connect Wallet';

  return (
    <div>
      {!account ? (
        <CustomBtn onClick={handleWalletProviderOpen} color="primary" variant="contained">
          <p style={{color: '#fff',  fontSize: '14px'}}>{buttonText}</p>
        </CustomBtn>
      ) : (
        <CustomBtn  color="primary" variant="contained" onClick={onPresentAccountModal}>
          <p style={{color: '#fff', fontSize: '14px'}}><b>{accountEllipsis}</b></p>
        </CustomBtn>
      )}

      <WalletProviderModal open={isWalletProviderOpen} handleClose={handleWalletProviderClose} />
      {/* <AccountModal open={isAccountModalOpen} handleClose={handleAccountModalClose}/> */}
    </div>
  );
};

export default AccountButton;
