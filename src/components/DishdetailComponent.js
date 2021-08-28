import React,{Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
class DishDetail extends Component{
	constructor(props) {
		super(props);
		this.state = {
			selectedDish: this.props.dish
		};
	}
	renderDish(dish){
          if(dish !=null ) {
            return(
                //<Dishdetail dish={dish}/>
                <Card>
                  <CardImg top src={dish.image} alt = {dish.name}/>
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
              );
          }
          else
          {
            return (
                <div></div>
              );
          }
  };
  renderComments(comments){
      if (comments == null) {
          return (<div></div>)
      }
      const cmnts = comments.map(comment => {
          return (
              <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author},
                  &nbsp;
                  {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: '2-digit'
                  }).format(new Date(comment.date))}
                  </p>
              </li>
          )
      })
      return (
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
      };
	render() {
    const dish = this.props.dish;
    if(dish==null)
    {
      return (<div></div>);
    }
    const dishItem = this.renderDish(dish);
    const dishComment = this.renderComments(dish.comments);
		return (
            <div className="row">
            <div className="col-12 col-md-5 m-1">
              {dishItem}
              </div>
              <div className="col-12 col-md-5 m-1">
              {dishComment}
              </div>
            </div> 
        );
	};
}
export default DishDetail;