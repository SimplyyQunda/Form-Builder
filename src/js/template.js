 import $ from "jquery";
 import {buildblock} from "./formbuilder.js"


function formInfo (data) {

for (var count = 0; count < data.length; count++) {
	var form = data[count];
	console.log(form);
	// console.log(form)

var groovyBox;

				



				if (form.type == "select"){
					groovyBox = $('<select placeholder="Set Language"><option> Set Language </option></select>');
					form.options.forEach(function(option){
						groovyBox.append(`<option value="${option.value}"> ${option.label} </option>`)
					})
				} else if (form.type == "textarea") {
					groovyBox = ` <div class="formBlock">

					<i class=" fa ${form.icon}" id="commentSec"> </i>
					<textarea  id="${form.id}" placeholder="${form.label}"> </textarea>

					
					
				</div>
				`;

				} else {
					groovyBox = `
				
				<div class="formBlock">
				<i class=" fa ${form.icon}"> </i>
				<input class="formbars" id="${form.id}" type="${form.type}" placeholder="${form.label}">

					
					
				</div>

					
				`;
				}


$(".container").append(groovyBox);

}
};

export {formInfo};
