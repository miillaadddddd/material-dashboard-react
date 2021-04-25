import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import InputLabel from "@material-ui/core/InputLabel";
import CardAvatar from "components/Card/CardAvatar.js";
import avatar from "assets/img/faces/marc.jpg";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import FormHesab from "views/forms/FormHesab.js";
import Hojreh from "views/Hojreh/Hojreh.js";
import Hojreh2 from "views/Hojreh2/Hojreh2.js";
import FormHesabEnfo from 'views/FormHesabEnfo.js'


import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";


  



export default function TypographyPage() {
  

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <CustomTabs
            title="حجره :"
            headerColor="info"
            tabs={[
              {
                tabName: "اطلاعات حساب",
                tabIcon: BugReport,
                tabContent:(
                  <FormHesabEnfo/>
                )
                
              },
              {
                tabName: "حجره ها",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
            ]}
          />
        </GridItem>
         
      </GridContainer>
      <Switch>
           <Route path="/admin/typography/0">{Hojreh2}</Route>
           <Route path="/admin/typography/1">{Hojreh}</Route>
         </Switch>
     
    </div>
  );
}
