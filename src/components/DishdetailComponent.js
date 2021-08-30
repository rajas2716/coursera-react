import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom'

	function RenderDish({dish}){
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

  function RenderComments({comments}){
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
	const DishDetail = (props) => {
    const dish = props.dish;
    if(dish==null)
    {
      return (<div></div>);
    }
    const dishItem = <RenderDish dish = {props.dish} />;
    const dishComment = <RenderComments comments = {props.comments} />;
		return (
            <div className="container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
              </div>
              <div className="row">
                <div className="col-12 col-md-5 m-1">
                  {dishItem}
                </div>
                <div className="col-12 col-md-5 m-1">
                  {dishComment}
                </div>
              </div>
            </div> 
        );
	};
export default DishDetail;