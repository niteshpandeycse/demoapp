import './App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { sampleData } from './sampleData/testdata';

const AdminPanel = () => {
  const onTappedToggle = async (event) => {
    if(event.target.parentElement.nextElementSibling && event.target.parentElement.nextElementSibling.tagName === 'LI') {
      let element = event.target.parentElement.parentElement.getElementsByTagName('input');
      let allChecked = [];
      for(let i=0; i < element.length; i++ ){
        allChecked.push(element[i].checked);
      };
      if(!allChecked.includes(false)){event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = true;}
      else {event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;}
    } else if(event.target.parentElement.nextElementSibling && event.target.parentElement.nextElementSibling.tagName === 'UL'){
      let element = event.target.parentElement.parentElement.getElementsByTagName('input');
      let allChecked = [];
      for(let i=0; i < element.length; i++ ){
        if(i !== 0)allChecked.push(element[i].checked);
      };
      for(let i=0; i < element.length; i++ ){
        element[i].checked = (allChecked.includes(false)) ? true : false;
      };
    } else if(!event.target.parentElement.nextElementSibling) {
      let element = event.target.parentElement.parentElement.getElementsByTagName('input');
      let allChecked = [];
      for(let i=0; i < element.length; i++ ){
        allChecked.push(element[i].checked);
      };
      if(!allChecked.includes(false)){event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = true;}
      else {event.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;}
    }
  }
  const generateLi = (data) => {    
    return (
      <>      
        {data.nodes.map((item) => {
          if(item.nodes.length > 0) {
            return (
              <>
              <Accordion><AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography><input type='checkbox' onChange={onTappedToggle}/>{item.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.nodes.map((element) => {
                  return (
                    <>
                    <div class="childBlock"><input type='checkbox' onChange={onTappedToggle}/>{element.name}</div>                    
                    </>
                  )
                })}
                </AccordionDetails>
                </Accordion>
              </>
            )
          } else {
            return (
              <><Accordion><AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography><input type='checkbox' onChange={onTappedToggle}/>{item.name}</Typography>
            </AccordionSummary></Accordion></>
            )
          }
        })}
      </>
    )
  }
  return (
    <div className="App">
      <section>   
        {
          sampleData && sampleData.map((data) => {
            console.log("nodes ----", data.nodes)
            if(data.nodes.length > 0) {
              return (
                <>
                <Accordion><AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><input type='checkbox' onChange={onTappedToggle}/>{data.name}</Typography>
        </AccordionSummary>
              
              <AccordionDetails>{generateLi(data)}</AccordionDetails></Accordion>
              </>)
            } else {
              return (
                <>
                <Accordion><AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><input type='checkbox' onChange={onTappedToggle}/>{data.name}</Typography>
        </AccordionSummary>
              
              </Accordion>
                </>
              )
            }
            
          })
        }
      </section>
      <section></section>
    </div>
  );
}

export default AdminPanel;
