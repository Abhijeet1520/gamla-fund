import React from "react";
import { MoralisProvider } from "react-moralis";
import Moralis from "moralis/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { enableViaWalletConnect } from "./Moralis/enableViaWalletConnect";
import WalletConnectProvider, { WalletConnectProviderProps } from "./WalletConnect";
import { Platform } from "react-native";
import Qrcode from "./Qrcode";
import { expo } from "../app.json";

interface ProvidersProps {
  readonly children: JSX.Element;
}

const { scheme } = expo;

/**
 * Initialization of Moralis
 */
const appId = "INSERT_uaHuc7uA9WkqR8w5E0SpqMXG3GyC5Z8s9ArB450BAPP_ID"; // Application id from moralis.io
const serverUrl = "https://i1kzxlthyuw7.usemoralis.com:2053/server"; //Server url from moralis.io
const environment = "native";
const getMoralis = () => Moralis;
// Initialize Moralis with AsyncStorage to support react-native storage
Moralis.setAsyncStorage(AsyncStorage);
// Replace the enable function to use the react-native WalletConnect
// @ts-ignore
Moralis.setEnableWeb3(enableViaWalletConnect);

const walletConnectOptions: WalletConnectProviderProps = {
  redirectUrl: Platform.OS === "web" ? window.location.origin : `${scheme}://`,
  storageOptions: {
    // @ts-ignore
    asyncStorage: AsyncStorage,
  },
  qrcodeModalOptions: {
    mobileLinks: ["rainbow", "metamask", "argent", "trust", "imtoken", "pillar"],
  },
  // Uncomment to show a QR-code to connect a wallet
  renderQrcodeModal: Qrcode,
};

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <WalletConnectProvider {...walletConnectOptions}>
      <MoralisProvider appId={appId} serverUrl={serverUrl} environment={environment} getMoralis={getMoralis}>
        {children}
      </MoralisProvider>
    </WalletConnectProvider>
  );
};
