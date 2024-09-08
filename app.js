let text_input=document.getElementById(`first_text_area`);

let text_output=document.getElementById(`to_do_output_1`);

let delete_button=document.createElement('div');
delete_button.style.backgroundColor="blue";
delete_button.style.padding="1em";
delete_button.style.position="absolute";
delete_button.style.bottom="-1em";
delete_button.style.right="-1em";
delete_button.innerText="Delete";

let add_button=document.getElementById(`input_button`);

let delete_button_enable_counter=new String();
let store_str_1= new String();


text_input.addEventListener('keydown',(event_1)=>{



    if(event_1.key!="Enter"){
        // console.log(event_1.key);
        store_str_1=text_input.value;
    }
    
    


        let new_element_checkbox=document.createElement(`input:checkbox`);




        let new_element_add=document.createElement('li');
        new_element_add.style.display="flex";
        new_element_add.style.justifyContent="space-between";
        new_element_add.style.alignItems="center";
        new_element_add.style.fontSize="1.5em";
        
        
        let cross_symbol=document.createElement('div')
        cross_symbol.style.backgroundImage=`url("https://cdn-icons-png.flaticon.com/128/9790/9790368.png")`
        cross_symbol.style.width="18px";
        cross_symbol.style.height="18px";
        cross_symbol.style.backgroundSize="cover";
        cross_symbol.style.cursor="pointer";
        cross_symbol.style.marginInline="0.2em";
        cross_symbol.display="inline";





    if(event_1.key=="Enter" && store_str_1!=' ') {




        new_element_add.innerHTML=store_str_1;
        text_output.appendChild(new_element_add);
        
        
        
        new_element_add.appendChild(cross_symbol);
        
        
        
        
        
        
        store_str_1=' ';
        text_input.value=" "
        
        
        // if (!delete_button_enable_counter) {
            random_check_variable_inside_create_new_element_per_click="hello"
            delete_button_enable_counter=delete_button_enable_counter.concat(random_check_variable_inside_create_new_element_per_click);
            // }
        }
        
        
        
        
        
        if (delete_button_enable_counter==="hello") {
            
            // text_output.appendChild(delete_button);
            delete_button_enable_counter=delete_button_enable_counter.concat("n");
        }
        
        

        new_element_add.addEventListener(('click'),(e)=>{
            new_element_add.classList.toggle(`checked`);
        })
        
        
        
        
        cross_symbol.addEventListener('click',(cross_symbol_event)=>{
            console.log(new_element_add);
            new_element_add.remove('new_element_add');
        })
        
        
    })
    

 
    
add_button.addEventListener(('click'),(add_button_event)=>{

let new_element_add=document.createElement('li');
new_element_add.style.display="flex";
new_element_add.style.justifyContent="space-between";
new_element_add.style.alignItems="center";
new_element_add.style.fontSize="1.5em";


let cross_symbol=document.createElement('div')
cross_symbol.style.backgroundImage=`url("https://cdn-icons-png.flaticon.com/128/9790/9790368.png")`
cross_symbol.style.width="18px";
cross_symbol.style.height="18px";
cross_symbol.style.backgroundSize="cover";
cross_symbol.style.cursor="pointer";
cross_symbol.style.marginInline="0.2em";
cross_symbol.display="inline";
  

new_element_add.innerHTML=store_str_1;
text_output.appendChild(new_element_add);
new_element_add.appendChild(cross_symbol);
store_str_1=' ';
text_input.value=" "


cross_symbol.addEventListener('click',(cross_symbol_event)=>{
    console.log(new_element_add);
    new_element_add.remove('new_element_add');
})

new_element_add.addEventListener(('click'),(e)=>{
    new_element_add.classList.toggle(`checked`);
})



})
    
delete_button.addEventListener('click',(event_1)=>{
    new_element_add.remove();
})
