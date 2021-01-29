<template>
  <div class="page-container">
    <main class="main-content">
      <div id="invoice-app">
        <div class="header">
          <div>
            <h1>Invoice Builder</h1>
            <p>Date:  <!--<input type="date" v-model="invoiceDate">--></p>
          </div>
          <div>
            <div class="section-spacer">
              <input type="text" placeholder="Company Name" class="company-name" >
              <textarea ></textarea>
            </div>
            <div class="section-spacer">
              <p><strong>Bill to:</strong></p>
              <textarea></textarea>
            </div>
          </div>
        </div>
        <div>
          <label for="currency-picker">Currency:</label>
          <select id="currency-picker" >
            <option></option>
          </select>
        </div>
        <table class="responsive-table">
          <thead>
          <tr>
            <th>No</th>
            <th>Item</th>
            <th>Price/unite</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
          </thead>
          <tr>
            <td data-label="No"></td>
            <td data-label="Item"><input type="text" /></td>
            <td data-label="Price/unite"><div class="cell-with-input"> <input type="number" min="0" /></div></td>
            <td data-label="Quantity"><input type="number" min="0"  /></td>
            <td data-label="Total"></td>
            <td class="text-right"><button class="is-danger">Delete item</button></td>
          </tr>
        </table>
        <button >Add item</button>
        <table>
          <tr>
            <td>Subtotal</td>
            <td></td>
          </tr>
          <tr>
            <td><div class="cell-with-input">Discount <input class="text-right" type="number" min="0" max="100" />%</div></td>
            <td></td>
          </tr>
          <tr>
            <td><div class="cell-with-input">Tax <input class="text-right" type="number" min="0" max="100"  />%</div></td>
            <td></td>
          </tr>
          <tr class="text-bold">
            <td>Total</td>
            <td></td>
          </tr>
        </table>
        <div class="section-spacer">
          <p>Notes:</p>
          <textarea ></textarea>
        </div>

        <div class="section-spacer">
          <p>Terms:</p>
          <textarea></textarea>
        </div>
        <div class="columns">
          <div class="column">
            <button class="button is-link is-light is-large" @click="Print">Print Invoice</button>
          </div>
          <div class="column">
            <button class="button is-dark is-large" @click="Generate">Generate Invoice</button>
          </div>
          <div class="column">
            <button class="button is-success is-large" @click="Save">Save Invoice</button>

          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script>
export default {
  name: "Factures",
  methods: {
    Print() {
      this.show = true
      this.$router.push('/dashboard');
    },
    Generate() {
      this.show = true
      this.$router.push('/dashboard');
    },
    Save() {
      this.show = true
      this.$router.push('/dashboard');
    },

  },
}
</script>

<style scoped>
.main-content {
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media print {
  .main-content {
    align-items: flex-start;
  }
}
#invoice-app {
  background-color: #f4f3ee;
  padding: 2rem;
  border-radius: 0.5rem;
}
@media (min-width: 761px) {
  .header {
    display: flex;
  }
}
@media (min-width: 761px) {
  .header > div:nth-child(-n+1) {
    order: 1;
    flex: 1;
    text-align: right;
    padding-left: 1rem;
  }
}
.section-spacer {
  margin: 1rem 0;
}
input, select, textarea {
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  display: inline-block;
  transition: background-color 0.3s ease-in-out;
  width: 100%;
}
input:focus, select:focus, textarea:focus {
  outline-color: #ffc371;
  background-color: rgba(255, 255, 255, 0.6);
}
input:hover, select:hover, textarea:hover {
  background-color: rgba(255, 255, 255, 0.5);
}
@media print {
  input, select, textarea {
    background-color: transparent;
  }
}
@media only screen and (min-width: 761px) {
  input, select, textarea {
    width: auto;
  }
}
textarea {
  width: 100%;
  min-height: 80px;
}
@media only screen and (max-width: 760px) {
  select {
    width: 100%;
  }
}
@media print {
  select {
    appearance: none;
  }
}
.company-name {
  font-size: 2rem;
}
table {
  width: auto;
  border-collapse: collapse;
  margin: 2rem 0;
}
table thead th {
  padding: 0.5rem 1rem;
}
table thead th:nth-child(-n+1) {
  padding-left: 0;
}
table thead th:nth-last-child(-n+1) {
  padding-right: 0;
}
table tr {
  border-bottom: 1px solid #f4d4aa;
}
table tr td {
  padding: 0.5rem 1rem;
}
table tr td:nth-child(-n+1) {
  padding-left: 0;
}
table tr td:nth-last-child(-n+1) {
  padding-right: 0;
}
table tr td input {
  width: 100%;
}
table tr td .cell-with-input {
  display: flex;
}
table tr td .cell-with-input input {
  margin: 0 0.2rem;
}
.responsive-table {
  width: 100%;
}
@media only screen and (max-width: 760px) {
  .responsive-table table, .responsive-table thead, .responsive-table tbody, .responsive-table th, .responsive-table td, .responsive-table tr {
    display: block;
  }
  .responsive-table thead tr {
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  .responsive-table tr {
    padding: 2rem 0;
  }
  .responsive-table td[data-label] {
    position: relative;
    padding-left: 40%;
    display: flex;
    align-items: center;
  }
  .responsive-table td[data-label]:before {
    content: attr(data-label);
    position: absolute;
    top: 0.5rem;
    left: 0;
    width: 35%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: bold;
  }
}
button {
  background-color: #81cf71;
  border: none;
  border-radius: 100px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}
button:focus {
  outline-color: #ffc371;
  background-color: #69c656;
}
button:hover {
  background-color: #70c95e;
}
@media print {
  button {
    display: none;
  }
}
button.is-danger {
  background-color: #ff5f6d;
}
button.is-danger:focus {
  background-color: #ff3b4c;
}
button.is-danger:hover {
  background-color: #ff4656;
}
.text-right {
  text-align: right;
}
.text-bold {
  font-weight: bold;
}
</style>
