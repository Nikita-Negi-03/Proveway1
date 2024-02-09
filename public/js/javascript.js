const unitOptions = [
	{unit: 1, price:"10.00",clicked:false,color:"black", size:"S"},	
	{unit: 2, price:"18.00", clicked:false,color:"black", size:"S"},	
	{unit: 3, price:"24.00", clicked:false,color:"black", size:"S"}	
	]
	
	show();
	function show() {
		let str = showUnits()
		document.getElementById('show').innerHTML= str;
	}

	function sizeDetails(index) {
		let str=''
		let {size,color,unit} = unitOptions[index];
		for(let i=1; i<=unit; i++){
			str+='<div class="size-block"><div class="number"><small>#'+i+'</small></div>'
			str+='<div class="select-size"><div class="select">'
			str+='<select id="standard-select"><option value="S">'+size+'</option><option value="M">M</option><option value="L">L</option></select>'
			str+='</div></div></div>'
		}
		return str
	}

	function colorDetails(index) {
		let str=''
		let {size,color,unit} = unitOptions[index];
		for(let i=1; i<=unit; i++){
			str+='<div class="size-block"><div class="select-size"><div class="select">'
			str+='<select id="standard-select"><option value="color">Color</option><option value="black">Black</option><option value="White">White</option><option value="Blue">Blue</option></select>'
			str+='</div></div></div>'
		}
		return str
	}

	function showUnits() {
		const arr = unitOptions.map((ele,index)=> {
			let {unit,price,clicked} = ele
			let str=''
			if(!clicked){
				str='<label><div class="option-container" onclick=\'moredetails(\"'+index+'")\'>' 
				str+='<div class="radio-button"><input type="radio" class="specifyColor" name="radio1"></div>'
				str+='<div class="qty">'
				str+='<div><span class="unit">'+unit+' Unit</span><span class="offer"> '+10*unit+'% off </span></div>'
	  			str+='<div class="standard-price">Standard Price</div></div>'
				str+='<div class="price"><div class="offer-price">$'+price+' USD</div><div class="original-price"><s>$24.00 USD</s></div></div>'
				str+='</div></label>'
			} else {
				str='<label><div class="option-container selected">' 
				str+='<div class="tab">Most popular</div>'
				str+='<div><div class="radio-button"><input type="radio" class="specifyColor" checked="checked" name="radio1"></div>'
				str+='<div class="qty">'
				str+='<div><span class="unit">'+unit+' Unit</span><span class="offer"> '+10*unit+'% off </span></div>'
	  			str+='<div class="standard-price">Standard Price</div></div>'
				str+='<div class="price"><div class="offer-price">$'+price+' USD</div><div class="original-price"><s>$24.00 USD</s></div></div></div>'
				str+='<div><div class="size"><label for="standard-select" class="">Size</label>'
				str+=sizeDetails(index)
				str+='</div>'
				str+='<div class="color"><label for="standard-select" class="label">Color</label>'
				str+=colorDetails(index)
				str+='</div></div></div></label>'
			}
			return str

		})
		let table=arr.join('');
		return table
	}

	function moredetails(index){
		for(let i=0; i<unitOptions.length; i++){
			if(index==i) unitOptions[index].clicked=true
			else unitOptions[i].clicked=false
		}
		show()
	}

	
