import { Component } from "react"
import { Card } from "react-bootstrap"

 class SingleBook extends Component {
   state = {
     selected: false
   }
   render() {
     return(
       <Card className="mb-4" style={{width: "30rem", border: this.state.selected ? "2px solid red" : ""}}>
       <Card.Img onClick={() => this.setState({selected: !this.state.selected})} variant="top" src={this.props.genere.img} />
        <Card.Body>
          <Card.Title>{this.props.genere.title}</Card.Title>
        
        </Card.Body>
     </Card> 
     )
   }
 }

//  const SingleBook = ({genere, num}) => (
//    <Card className="mb-4" style={{ width: '18rem' }}>
//        <Card.Img variant="top" src={genere.img} />
//         <Card.Body>
//           <Card.Title>{genere.title}</Card.Title>
        
//         </Card.Body>
//      </Card> 
//  )

  


export default SingleBook