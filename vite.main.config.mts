import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      external: [
        "better-sqlite3",
        // ESM-only packages that need to be externalized
        "helia",
        "@helia/json",
        "@helia/unixfs",
        "blockstore-fs",
        "datastore-fs",
        "multiformats",
        "@libp2p/crypto",
        // libp2p ecosystem packages
        "libp2p",
        "@chainsafe/libp2p-gossipsub",
        "@chainsafe/libp2p-noise",
        "@chainsafe/libp2p-yamux",
        "@libp2p/mplex",
        "@libp2p/tcp",
        "@libp2p/websockets",
        "@libp2p/webrtc",
        "@libp2p/kad-dht",
        "@libp2p/mdns",
        "@libp2p/bootstrap",
        "@libp2p/identify",
        "@libp2p/circuit-relay-v2",
        "@libp2p/dcutr",
        "@libp2p/autonat",
        "@libp2p/upnp-nat",
        // Crypto
        "tweetnacl",
        "tweetnacl-util",
        // Web3/Blockchain
        "ethers",
      ],
    },
  },
  plugins: [
    {
      name: "restart",
      closeBundle() {
        process.stdin.emit("data", "rs");
      },
    },
  ],
});
