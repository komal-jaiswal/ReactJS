import React, { Component } from 'react'
   const getPercent=(decimal)=>{
        return decimal*100+'%'
    }
   const calcGoalProgress=(total,goal)=>{
        return getPercent(total/goal)
    }
const ProductList=(props)=>{
    const { product } = props
    return(
        <div className="heading">

        {/* <h1> welcome to {company} </h1>
        <p>{total}</p>
        <p>{power}</p>
        <p>{backCountry}</p>
        <p>Goal Progress: {calcGoalProgress(total,goal)}</p> */}
        <ul>
            <li>{product.name} | <img alt={product.name} src= {product.image} height={200} width={200}></img></li>
        </ul>
    </div>
    )
}

// class ProductList extends Component {
//     getPercent=(decimal)=>{
//         return decimal*100+'%'
//     }
//     calcGoalProgress=(total,goal)=>{
//         return this.getPercent(total/goal)
//     }
//     render() {
//         const { company, total, power, backCountry, goal } = this.props
//         return (

//             <div className="heading">
//                 <h1> welcome to {company} </h1>
//                 <p>{total}</p>
//                 <p>{power}</p>
//                 <p>{backCountry}</p>
//                 <p>Goal Progress: {this.calcGoalProgress(total,goal)}</p>
//             </div>

//         )
//     }

// }

export default ProductList