import React, {Component} from "react";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#EF6C00',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
}
class SimpleForm extends Component {
    render() {
        return (
            <ThemeProvider theme = {theme}>
            <ChatBot 
       steps={[
         {
          id:'q-name', 
          message:'Hi! What is your name?', 
          trigger:'name',
         },
         {
          id:'name', 
          user:true, 
          validator: (value) => {
             if (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/.test(value))
               {
                 return true;
               }
             else
               {
                 return'Please input alphabet characters only.';
               }
          },
          trigger: 'intro',
         },
         {
            id:'intro',
            message:'Do you need any assistance?',
            trigger:'intro-user',
         },
         {
            id:'intro-user', 
            options:[
              {value:'y', label:'Yes', trigger:'yes-response'},
              {value:'n', label:'No', trigger:'no-response'},
            ] 
           },
           {
            id:'yes-response', 
            message:'Great! What can I assist you with?', 
            trigger: 'assistance',
           },
           {
            id:'no-response', 
            message:'Ok. Please refresh this page if you need assistance at any time!', 
            end:true,
           },
        {
            id:'assistance', 
            options:[
              {value:'y', label:'Find Mentor', trigger:'mentor-response'},
              {value:'n', label:'Find Skillset/Experience', trigger:'exp-response'},
              {value: 'o', label:'No thanks', trigger: 'no-response'}
            ] 
           },
           {
            id:'mentor-response', 
            message:'To find a mentor, please use the searchbar to the left of me!', 
            end:true,
           },
           {
            id:'exp-response', 
            message:'To find a specific skillset or experience that a mentor may have, please use the searchbar to the left of me!', 
            end:true,
           },
        ]}
      />
      </ThemeProvider>
        );
    }
}

export default SimpleForm;