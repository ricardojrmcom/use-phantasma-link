<div align="center">

# 👻 `@ricardojrmcom/use-phantasma-link`

<b>React hook for PhantasmaLink</b>

![build](https://img.shields.io/github/workflow/status/ricardojrmcom/use-phantasma-link/Continuous%20Integration?style=for-the-badge)
![license](https://img.shields.io/github/license/ricardojrmcom/use-phantasma-link?style=for-the-badge)

![author](<https://img.shields.io/badge/Author-Ricardo%20%3Cl1b3r__--%3E%20Mota%20(%40ricardojrmcom)-orange?style=for-the-badge>)

![lang](https://img.shields.io/github/languages/top/ricardojrmcom/use-phantasma-link?style=for-the-badge)
![version](https://img.shields.io/npm/v/@ricardojrmcom/use-phantasma-link?style=for-the-badge)
![size](https://img.shields.io/bundlephobia/min/@ricardojrmcom/use-phantasma-link?style=for-the-badge)

</div>

<br />

---

<br />

#### <b>[Demo](http://demo-use-phantasma-link.vercel.app/)</b>

<br />

#### <b>React hook wrapper for [@ncwardell's PhantasmaLink](https://github.com/ncwardell/PhantasmaConnect/blob/main/src/phantasmaLink.ts)</b>

<br />

### <b>Install</b>

```tsx
npm install @ricardojrmcom/use-phantasma-link

yarn add @ricardojrmcom/use-phantasma-link
```

<br />

### <b>Usage</b>

```tsx
// 1. Wrap `PhantasmaLinkProvider` at the root app level
import { PhantasmaLinkProvider } from '@ricardojrmcom/use-phantasma-link';

export const Dapp = () => (
  <PhantasmaLinkProvider dappName="My-Dapp">
    <DemoDapp />
  </PhantasmaLinkProvider>
);

// 2. Call the `usePhantasmaLink` inside your components
import { usePhantasmaLink } from '@ricardojrmcom/use-phantasma-link';

export const DemoDapp = () => {
  const { dapp, isLoggedIn, isLoggedInSet } = usePhantasmaLink();

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
```

<br />

---

<br />

### <b>License</b>

[MIT](https://github.com/ricardojrmcom/use-phantasma-link/blob/main/LICENSE) © Ricardo <l1b3r\_-> Mota ([@ricardojrmcom](https://github.com/ricardojrmcom))

Bootstrapped with 🟣[@ricardojrmcom/supernova](https://github.com/ricardojrmcom/supernova)

<br />
