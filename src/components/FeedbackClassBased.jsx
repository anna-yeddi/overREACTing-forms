// import React, { Component } from 'react'
// import PropTypes from 'prop-types'

// export default class FeedbackClassBased extends Component {
//   static propTypes = {}
//   state = {
//     items: [
//       new PurchaseModel(1, 'Pineapple'),
//       new PurchaseModel(2, 'Watermelon'),
//     ],
//   }

//   onItemToggle = (item) => {
//     this.setState((prevState) => ({
//       items: prevState.items.map((o) => {
//         if (o.id === item.id) {
//           return { ...o, done: !o.done }
//         }
//         return o
//       }),
//     }))
//   }

//   onItemRemove = (item) => {
//     this.setState((prevState) => ({
//       items: prevState.items.filter((o) => o.id !== item.id),
//     }))
//   }

//   render() {
//     const { items } = this.state
//     return (
//       <ul>
//         {items.map((o) => (
//           <PurchaseItemClassBased
//             key={o.id}
//             item={o}
//             onToggle={this.onItemToggle}
//             onRemove={this.onItemRemove}
//           />
//         ))}
//       </ul>
//     )
//   }
// }
