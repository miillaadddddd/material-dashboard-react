import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import FormDashboard from '../FormDashboard.js'
import CardFooter from "components/Card/CardFooter.js";
import SignupForm from "views/forms/Form2.js";



import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "#FFFFFF",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles();

export default function UserProfile() {
  const classes = useStyles();
 
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <div>
              <h4 className={classes.cardTitleWhite}>ویرایش اطلاعات</h4>
              <br />
              <p className={classes.cardCategoryWhite}>برای انجام هر گونه تغییرات کلید ویرایش در انتهای همین صفحه را انتخاب کنید</p>
              </div>
            </CardHeader>
            <CardBody>
            <FormDashboard/>
             </CardBody>
            
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>میلاد حسنی</h6>
              <h4 className={classes.cardTitle}>حجره داری مهربان</h4>
              <p className={classes.description}>
               من از هفت سالگی به مدرسه رفتم و همه درسهام را مرتب و منظم خواندم...
              </p>
              
            </CardBody>
          </Card>
        </GridItem>
     
         <GridItem xs={12} sm={12} md={12}>


           
           
           
           
           </GridItem>           
           
      </GridContainer>
      
    </div>
    
    );
}
