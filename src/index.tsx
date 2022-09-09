import React, {
  useEffect,
  useState,
  useMemo,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import { PhantasmaLink } from './phantasmaLink';

export interface PhantasmaLinkContextType {
  dapp?: PhantasmaLink;
  dappName: string;
  isLoggedIn: boolean;
  isLoggedInSet: React.Dispatch<React.SetStateAction<boolean>>;
}

const init: PhantasmaLinkContextType = {
  dapp: undefined,
  dappName: 'My-Dapp',
  isLoggedIn: false,
  isLoggedInSet: () => undefined,
};

const PhantasmaLinkContext = createContext<PhantasmaLinkContextType>(init);

export type PhantasmaWalletType = 'poltergeist' | 'ecto';

export interface PhantasmaLinkProviderProps {
  children?: ReactNode;
  dappName?: string;
}

export const PhantasmaLinkProvider = ({
  dappName = 'My-Dapp',
  children,
}: PhantasmaLinkProviderProps) => {
  const [dapp, dappSet] = useState<PhantasmaLinkContextType['dapp']>(init.dapp);
  const [isLoggedIn, isLoggedInSet] = useState<
    PhantasmaLinkContextType['isLoggedIn']
  >(init.isLoggedIn);

  useEffect(() => {
    const dappInit = new PhantasmaLink(dappName);
    dappSet(dappInit);
  }, [dappSet, dappName]);

  const ctx = useMemo(
    () => ({ dapp, dappName, isLoggedIn, isLoggedInSet }),
    [dapp, dappName, isLoggedIn, isLoggedInSet],
  );

  return (
    <PhantasmaLinkContext.Provider value={ctx}>
      {children}
    </PhantasmaLinkContext.Provider>
  );
};

export const usePhantasmaLink = () => useContext(PhantasmaLinkContext);
