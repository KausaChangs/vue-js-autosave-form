<template>
  <div id="app">
    <h3>FireBase Data</h3>
    {{ firebaseData }}
  </div>
</template>

<script>
import { db } from "./firebase";

const documentPath = "contacts/kausa";

export default {
  data() {
    return {
      firebaseData: null,
    };
  },

  firestore() {
    return {
      firebaseData: db.doc(documentPath),
    };
  },
};
</script>
