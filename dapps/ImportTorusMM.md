---
id: importTorusMM
title : Import Torus Private Key into Metamask
slug: dapps/importTorusMM
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../src/css/custom.css'


While the Torus wallet is a great option for newcomers to crypto, it can be more difficult to use when interacting with decentralized applications (dApps). The purpose of this guide is to explain how to get funds into a MetaMask wallet - enabling broader functionality, security and easier access to blockchain apps. 

For instructions on how to get started with a MetaMask wallet, [check out this article from the Metamask team](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-Started-With-MetaMask).

## Transfer Funds to MetaMask
Once you are logged into your Torus wallet, navigate to the transfer page using the navigation bar at the top of the page. 

1. Copy the public key from MetaMask.
2. Paste into the ‘Transfer to’ line.
3. Enter the amount you’d like to send.

Your private key is crucial for accessing and managing your funds securely. To maintain the security of your accounts, never share your private key with anyone.

Once you are satisfied with the parameters of the transaction, click the transfer button at the bottom of the page.
If you have multiple tokens in your Torus Wallet, you will have to repeat this process for each token. 

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/transferTorusMM.png')} />

## Import Torus Private Key Into MetaMask

### Get your Torus Private Key
Once you’re signed in to your Torus wallet, navigate to the `Settings` page using the menu at the top of the page. Once on the `Settings` page, click `Account Details` in the `Privacy and Security` section. This will open a pop-up with two options for getting your private key.

<img alt='Download Private Key in Torus' width='75%' height='auto' class='center' src={useBaseUrl('img/content/toruspk.png')} />

Choose the option to download a JSON file with your private key or to view and copy the private key securely.

### Import Private Key
Once you've obtained your Torus private key, securely import it into MetaMask. Click the `Import Account` option in this menu. Here you can use the `Select Type` option to select which option you’d like to use to import your private key.

<img alt='Import Private Key into MetaMask' width='50%' height='auto' class='center' src={useBaseUrl('img/content/mmimportkey.png')} />

If the private key is copied, select `Private Key` in MetaMask and paste it. For a JSON file, choose `JSON File`, upload it, enter the password, and click `Import`. The new account will appear in MetaMask!

<img alt='Paste Private Key' height='auto' width='40%' class='leftfloat' src={useBaseUrl('img/content/mmimportkey1.png')} />
<img alt='Select Private Key File' height='auto' width='40%' src={useBaseUrl('img/content/mmimportkey2.png')} />
