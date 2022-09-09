/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React, { useEffect, useCallback } from 'react';
import { usePhantasmaLink } from '.';

export const DemoDapp = () => {
  const { dapp, isLoggedIn, isLoggedInSet } = usePhantasmaLink();

  console.log({ dapp });

  useEffect(() => {
    if (dapp) {
      console.log({ dapp });
    }
  }, [dapp]);

  const loginSuccess = useCallback(
    (data: any) => {
      console.log('Login Success!: ', data);
      isLoggedInSet(true);
    },
    [isLoggedInSet],
  );

  const loginError = useCallback((error: any) => {
    console.error('Login Error!: ', error);
  }, []);

  const loginWithPoltergeist = useCallback(() => {
    dapp?.login(loginSuccess, loginError, 'poltergeist');
  }, [dapp, loginSuccess, loginError]);

  const loginWithEcto = useCallback(() => {
    dapp?.login(loginSuccess, loginError, 'ecto');
  }, [dapp, loginSuccess, loginError]);

  return (
    <div>
      <h1>DEMO</h1>
      <p>Open the console to explore the "dapp" object</p>
      {dapp && !isLoggedIn && (
        <div>
          <span style={{ marginRight: '6px' }}>
            <button type="button" onClick={loginWithPoltergeist}>
              Login with Poltergeist
            </button>
          </span>
          <span>
            <button type="button" onClick={loginWithEcto}>
              Login with Ecto
            </button>
          </span>
        </div>
      )}
      {dapp && isLoggedIn && (
        <div>
          <h1>LOGGED IN!</h1>
          <h2>Address: {dapp?.account?.address}</h2>
          <h2>Name: {dapp?.account?.name}</h2>
          <h2>Wallet: {dapp?.wallet}</h2>
        </div>
      )}
    </div>
  );
};
