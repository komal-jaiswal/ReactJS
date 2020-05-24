import React, { Component } from 'react';
import ProductList from './productChildCompo'
import Book from './book'
const Hiring = () =>
  <div>
    <p>The library is hiring. Please visit the www.library.com for for info</p>
  </div>
const NotHiring = () =>
  <div>
    <p>The library is not hiring. Check back later for more info.</p>
  </div>

  class API extends Component{
       //replacement to constructor
  state = {
    loggedIn: false,
    open: true,
    //passing state from parent to child
    freeBookMark: true,
    hiring: true,
    data: [],
    products:[],
    loading: false
  }

  componentDidMount() {
    console.log("component is mounted")
    this.setState({ loggedIn: true })
    fetch('https://hplussport.com/api/products/order/price/sort/asc/qty/1')
      .then(data => data.json())
      .then(data => this.setState({ data, loading: false }))
  }
  componentDidUpdate() {
    console.log("Component is updated")
  }

  showAllProducts(){
    this.setState({loading:true})
    fetch('https://hplussport.com/api/products/order/price/sort/asc')
    .then(products=>products.json())
    .then(products=>this.setState({products,loading:false}))
  }
  toggleOpenClosed = this.toggleOpenClosed.bind(this)
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     loggedIn: false,
  //     open: true
  //   }
  //   this.toggleOpenClosed = this.toggleOpenClosed.bind(this)
  // }

  toggleOpenClosed() {
    this.setState({
      open: !this.state.open
    })
  }
  toogleUsingArrow = () => {
    this.setState(prevState => ({
      open: !prevState.open
    }))
  }

  logIn = () => {
    this.setState({ loggedIn: true })
  }
  logOut = () => {
    this.setState({ loggedIn: false })
  }
  render() {
    //destructoring
    const { book } = this.props
    return (
      <div>
        <ul>
          {this.props.person.map(person => <li key={person.id}>{person.name} | Age {person.age}</li>)}
        </ul>
        <h3>{this.state.hiring ? <Hiring></Hiring> : <NotHiring></NotHiring>}</h3>
        <h1>The library is {this.state.open ? "Opened" : "Closed"} </h1>
        {this.state.loading ?
          "loading..." :
          <div>
            {this.state.data.map((product, i) => {
              return <div key={i}>
                <h3> Library product of the week</h3>
                <h4>{product.name}</h4>
                <img alt={product.name} src={product.image} height={200} width={200}></img>
              </div>
            })}
          </div>}
        {/* binding inside constructor  */}
        <button onClick={this.toggleOpenClosed}>toggle</button>
        <button onClick={this.toggleOpenClosed.bind(this)}>toogle binding in button</button>
        <button onClick={this.toogleUsingArrow}>using arrow function</button>
        <button onClick={() => this.toggleOpenClosed()}>toggle arrow in button</button>
        {this.props.book.map((book, i) => <Book key={i} title={book.title} author={book.author} pages={book.pages} freeBookMark={this.state.freeBookMark}></Book>)}
            {/* show all the products from API */}
            <button onClick={this.showAllProducts.bind(this)}>Get All products</button>
            {this.state.loading ? "loading..." : this.state.products.map((product,i)=><ProductList key={i} product={product}></ProductList>)}
      </div>
    );
  }
  }

  export default API