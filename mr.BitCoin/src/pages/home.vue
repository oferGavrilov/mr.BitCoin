<template>
  <section class="home">
    <div class="user-details">
      <h3>Welcome {{user.name}}</h3>
      <div class="balance">
        <h4>Balance: ${{user.balance}}</h4>
        <h4>Rate: {{rate}}</h4>
        <div class="rate flex align-center">
        <h4>Current profit: {{(1 / rate * user.balance).toFixed(3)}}$</h4>
        <v-icon name="io-triangle-sharp"></v-icon><span>{{(1/rate * 100).toFixed(3)}}%</span>
        </div>
      </div>
    </div>
    <div class="crypto-wallet">
      <div class="crypto-wallet-text">
        <h2>A crypto wallet & gateway to blockchain apps</h2>
        <p>Start exploring blockchain applications in seconds. Trusted by over 30 million users worldwide.</p>
      </div>
      <img src="https://images.ctfassets.net/9sy2a0egs6zh/5n9UZwFnPyMTphfiT6SDMv/67001204dd8d16fa99070e902c512b9c/home-hero.png?w=1920&q=100&fm=webp" alt="">
    </div>
    <div class="app-content">
      <div class="app-content-text">
        <h2>Buy, store, send and swap tokens</h2>
        <p>Available as a browser extension and as a mobile app, MetaMask equips you with a key vault, secure login, token wallet, and token exchange—everything you need to manage your digital assets.</p>
      </div>
      <img src="https://images.ctfassets.net/9sy2a0egs6zh/78HoDbPwuWz8M6er6joJdE/c440f3e5d7262a424f13da69a46e958a/wallet-illo.svg" alt="">
    </div>
    <div class="explorer-app">
      <img src="https://images.ctfassets.net/9sy2a0egs6zh/5w0q0fWbGtmiSts6oIDJ5x/6746f0e6d562c0e8315d841eb4c85f87/Explore-illo.svg" alt="">
      <div class="explorer-app-text">
        <h2>Explore blockchain apps</h2>
        <p>MetaMask provides the simplest yet most secure way to connect to blockchain-based applications. You are always in control when interacting on the new decentralized web.</p>
      </div>
    </div>
    <div class="app-data">
      <div>
        <h2>Own your data</h2>
        <p>MetaMask generates passwords and keys on your device, so only you have access to your accounts and data. You always choose what to share and what to keep private.</p>
      </div>
      <img src="https://images.ctfassets.net/9sy2a0egs6zh/Cgl4g0Z2URG5PhRXT7CjP/54984377c95ba08d7aa5b36acb038b61/Browse-illo.svg" alt="">
    </div>
  </section>
</template>

<script>
import { userService } from "@/services/user.service.js";
import { bitcoinService } from "@/services/bitcoin.service.js";
export default {
  data() {
    return {
      user: null,
      rate: null,
    };
  },

  async created() {
    this.user = userService.getUser();
    this.rate = await bitcoinService.getRate();
  },
};
</script>



