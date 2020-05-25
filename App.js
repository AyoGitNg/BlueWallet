import React from 'react';
import { Linking, DeviceEventEmitter, AppState, Clipboard, StyleSheet, KeyboardAvoidingView, Platform, View } from 'react-native';
import Modal from 'react-native-modal';
import { NavigationActions } from 'react-navigation';
import MainBottomTabs from './MainBottomTabs';
import NavigationService from './NavigationService';
import { BlueTextCentered, BlueButton } from './BlueComponents';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import url from 'url';
import { getParams as getLNURLParams } from 'js-lnurl';
import { AppStorage, LightningCustodianWallet } from './class';
import { Chain } from './models/bitcoinUnits';
import QuickActions from 'react-native-quick-actions';
import * as Sentry from '@sentry/react-native';
import OnAppLaunch from './class/onAppLaunch';
import DeeplinkSchemaMatch from './class/deeplink-schema-match';
import BitcoinBIP70TransactionDecode from './bip70/bip70';
const A = require('./analytics');

if (process.env.NODE_ENV !== 'development') {
  Sentry.init({
    dsn: 'https://23377936131848ca8003448a893cb622@sentry.io/1295736',
  });
}

const bitcoinModalString = 'Bitcoin address';
const lightningModalString = 'Lightning Invoice';
const loc = require('./loc');
const BlueApp = require('./BlueApp');

export default class App extends React.Component {
  navigator = null;

  state = {
    appState: AppState.currentState,
    isClipboardContentModalVisible: false,
    clipboardContentModalAddressType: bitcoinModalString,
    clipboardContent: '',
  };

  componentDidMount() {
    Linking.addEventListener('url', this.handleOpenURL);
    AppState.addEventListener('change', this._handleAppStateChange);
    QuickActions.popInitialAction().then(this.popInitialAction);
    DeviceEventEmitter.addListener('quickActionShortcut', this.walletQuickActions);
    this._handleAppStateChange(undefined);
  }

  popInitialAction = async data => {
    if (data) {
      // eslint-disable-next-line no-unused-expressions
      this.navigator.dismiss;
      const wallet = BlueApp.getWallets().find(wallet => wallet.getID() === data.userInfo.url.split('wallet/')[1]);
      this.navigator.dispatch(
        NavigationActions.navigate({
          key: `WalletTransactions-${wallet.getID()}`,
          routeName: 'WalletTransactions',
          params: {
            wallet,
          },
        }),
      );
    } else {
      const url = await Linking.getInitialURL();
      if (url) {
        if (DeeplinkSchemaMatch.hasSchema(url)) {
          this.handleOpenURL({ url });
        }
      } else {
        const isViewAllWalletsEnabled = await OnAppLaunch.isViewAllWalletsEnabled();
        if (!isViewAllWalletsEnabled) {
          // eslint-disable-next-line no-unused-expressions
          this.navigator.dismiss;
          const selectedDefaultWallet = await OnAppLaunch.getSelectedDefaultWallet();
          const wallet = BlueApp.getWallets().find(wallet => wallet.getID() === selectedDefaultWallet.getID());
          if (wallet) {
            this.navigator.dispatch(
              NavigationActions.navigate({
                routeName: 'WalletTransactions',
                key: `WalletTransactions-${wallet.getID()}`,
                params: {
                  wallet,
                },
              }),
            );
          }
        }
      }
    }
  };

  walletQuickActions = data => {
    const wallet = BlueApp.getWallets().find(wallet => wallet.getID() === data.userInfo.url.split('wallet/')[1]);
    // eslint-disable-next-line no-unused-expressions
    this.navigator.dismiss;
    this.navigator.dispatch(
      NavigationActions.navigate({
        routeName: 'WalletTransactions',
        key: `WalletTransactions-${wallet.getID()}`,
        params: {
          wallet,
        },
      }),
    );
  };

  componentWillUnmount() {
    Linking.removeEventListener('url', this.handleOpenURL);
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  _handleAppStateChange = async nextAppState => {
    if (BlueApp.getWallets().length > 0) {
      if ((this.state.appState.match(/background/) && nextAppState) === 'active' || nextAppState === undefined) {
        setTimeout(() => A(A.ENUM.APP_UNSUSPENDED), 2000);
        const clipboard = await Clipboard.getString();
        const isAddressFromStoredWallet = BlueApp.getWallets().some(wallet => {
          if (wallet.chain === Chain.ONCHAIN) {
            return wallet.weOwnAddress(clipboard);
          } else {
            return wallet.isInvoiceGeneratedByWallet(clipboard) || wallet.weOwnAddress(clipboard);
          }
        });
        const isBitcoinAddress =
          DeeplinkSchemaMatch.isBitcoinAddress(clipboard) || BitcoinBIP70TransactionDecode.matchesPaymentURL(clipboard);
        const isLightningInvoice = DeeplinkSchemaMatch.isLightningInvoice(clipboard);
        const isLNURL = DeeplinkSchemaMatch.isLnUrl(clipboard);
        const isBothBitcoinAndLightning = DeeplinkSchemaMatch.isBothBitcoinAndLightning(clipboard);
        if (
          !isAddressFromStoredWallet &&
          this.state.clipboardContent !== clipboard &&
          (isBitcoinAddress || isLightningInvoice || isLNURL || isBothBitcoinAndLightning)
        ) {
          if (isBitcoinAddress) {
            this.setState({ clipboardContentModalAddressType: bitcoinModalString });
          } else if (isLightningInvoice || isLNURL) {
            this.setState({ clipboardContentModalAddressType: lightningModalString });
          } else if (isBothBitcoinAndLightning) {
            this.setState({ clipboardContentModalAddressType: bitcoinModalString });
          }
          this.setState({ isClipboardContentModalVisible: true });
        }
        this.setState({ clipboardContent: clipboard });
      }
      if (nextAppState) {
        this.setState({ appState: nextAppState });
      }
    }
  };

  isBothBitcoinAndLightningWalletSelect = wallet => {
    const clipboardContent = this.state.clipboardContent;
    if (wallet.chain === Chain.ONCHAIN) {
      this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({
            routeName: 'SendDetails',
            params: {
              uri: clipboardContent.bitcoin,
              fromWallet: wallet,
            },
          }),
        );
    } else if (wallet.chain === Chain.OFFCHAIN) {
      this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({
            routeName: 'ScanLndInvoice',
            params: {
              uri: clipboardContent.lndInvoice,
              fromSecret: wallet.getSecret(),
            },
          }),
        );
    }
  };

  handleOpenURL = event => {
    DeeplinkSchemaMatch.navigationRouteFor(event, value => this.navigator && this.navigator.dispatch(NavigationActions.navigate(value)));

    if (event.url === null) {
      return;
    }
    if (typeof event.url !== 'string') {
      return;
    }
    let isBothBitcoinAndLightning;
    try {
      isBothBitcoinAndLightning = this.isBothBitcoinAndLightning(event.url);
    } catch (e) {
      console.log(e);
    }
    if (isBothBitcoinAndLightning) {
      this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({
            routeName: 'HandleOffchainAndOnChain',
            params: {
              onWalletSelect: this.isBothBitcoinAndLightningWalletSelect,
            },
          }),
        );
    } else if (this.isBitcoinAddress(event.url)) {
      this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({
            routeName: 'SendDetails',
            params: {
              uri: event.url,
            },
          }),
        );
    } else if (this.isLightningInvoice(event.url)) {
      this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({
            routeName: 'ScanLndInvoice',
            params: {
              uri: event.url,
            },
          }),
        );
    } else if (this.isLnUrl(event.url)) {
      console.log('START WITH LNURL', event.lnurl)
      getLNURLParams(event.url)
        .then(params => {
          console.log('PARAMS', params)
          var routeName;
          if (params.tag === 'withdrawRequest') {
            routeName = 'LNDCreateInvoice';
          } else if (params.tag === 'payRequest') {
            routeName = 'ScanLndInvoice';
          } else {
            return
          }

          this.navigator &&
            this.navigator.dispatch(
              NavigationActions.navigate({
                routeName,
                params: {
                  uri: event.url,
                  lnurlData: params
                },
              }),
            )
        }).catch(error => console.log('LNURL FETCH ERROR', error));
    } else if (this.isSafelloRedirect(event)) {
      let urlObject = url.parse(event.url, true) // eslint-disable-line

      const safelloStateToken = urlObject.query['safello-state-token'];

      this.navigator &&
        this.navigator.dispatch(
          NavigationActions.navigate({
            routeName: 'BuyBitcoin',
            params: {
              uri: event.url,
              safelloStateToken,
            },
          }),
        );
    } else {
      let urlObject = url.parse(event.url, true); // eslint-disable-line
      console.log('parsed', urlObject);
      (async () => {
        if (urlObject.protocol === 'bluewallet:' || urlObject.protocol === 'lapp:' || urlObject.protocol === 'blue:') {
          switch (urlObject.host) {
            case 'openlappbrowser':
              console.log('opening LAPP', urlObject.query.url);
              // searching for LN wallet:
              let haveLnWallet = false;
              for (let w of BlueApp.getWallets()) {
                if (w.type === LightningCustodianWallet.type) {
                  haveLnWallet = true;
                }
              }

              if (!haveLnWallet) {
                // need to create one
                let w = new LightningCustodianWallet();
                w.setLabel(this.state.label || w.typeReadable);

                try {
                  let lndhub = await AsyncStorage.getItem(AppStorage.LNDHUB);
                  if (lndhub) {
                    w.setBaseURI(lndhub);
                    w.init();
                  }
                  await w.createAccount();
                  await w.authorize();
                } catch (Err) {
                  // giving up, not doing anything
                  return;
                }
                BlueApp.wallets.push(w);
                await BlueApp.saveToDisk();
              }

              // now, opening lapp browser and navigating it to URL.
              // looking for a LN wallet:
              let lnWallet;
              for (let w of BlueApp.getWallets()) {
                if (w.type === LightningCustodianWallet.type) {
                  lnWallet = w;
                  break;
                }
              }

              if (!lnWallet) {
                // something went wrong
                return;
              }

              this.navigator &&
                this.navigator.dispatch(
                  NavigationActions.navigate({
                    routeName: 'LappBrowser',
                    params: {
                      fromSecret: lnWallet.getSecret(),
                      fromWallet: lnWallet,
                      url: urlObject.query.url,
                    },
                  }),
                );
              break;
          }
        }
      })();
    }
  };

  renderClipboardContentModal = () => {
    return (
      <Modal
        onModalShow={() => ReactNativeHapticFeedback.trigger('impactLight', { ignoreAndroidSystemSettings: false })}
        isVisible={this.state.isClipboardContentModalVisible}
        style={styles.bottomModal}
        onBackdropPress={() => {
          this.setState({ isClipboardContentModalVisible: false });
        }}
      >
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : null}>
          <View style={styles.modalContent}>
            <BlueTextCentered>
              You have a {this.state.clipboardContentModalAddressType} on your clipboard. Would you like to use it for a transaction?
            </BlueTextCentered>
            <View style={styles.modelContentButtonLayout}>
              <BlueButton
                noMinWidth
                title={loc.send.details.cancel}
                onPress={() => this.setState({ isClipboardContentModalVisible: false })}
              />
              <View style={{ marginHorizontal: 8 }} />
              <BlueButton
                noMinWidth
                title="OK"
                onPress={() => {
                  this.setState({ isClipboardContentModalVisible: false }, async () => {
                    const clipboard = await Clipboard.getString();
                    setTimeout(() => this.handleOpenURL({ url: clipboard }), 100);
                  });
                }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainBottomTabs
          ref={nav => {
            this.navigator = nav;
            NavigationService.setTopLevelNavigator(nav);
          }}
        />
        {this.renderClipboardContentModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    minHeight: 200,
    height: 200,
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modelContentButtonLayout: {
    flexDirection: 'row',
    margin: 16,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
});
