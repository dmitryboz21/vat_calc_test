//требует jquery
//требует numeral.js
numeral.locale('ru');


var hasTouch = window.matchMedia('(pointer: coarse)').matches;
if (hasTouch) {
	$('body').addClass('touch-device');
}
// TODO onfocus blur() к инпуту на мобилках
// TODO (опционально)-webkit-tap-highlight-color: transparent;




$.fn.simpleCalc = function (options = []) {
	if (!this.length > 0) {
		//проверим, переданы ли инпуты к которым прикрутить надо калькулятор
		return this;
	}
	this.parent().append('<div class="simple-calc js-simple-calc">\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--operator" data-function="/"><span>÷</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--operator" data-function="*"><span>×</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--operator" data-function="-"><span>-</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--operator" data-function="+"><span>+</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="7"><span>7</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="4"><span>4</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="1"><span>1</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--empty" data-function=""><span></span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="8"><span>8</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="5"><span>5</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="2"><span>2</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="0"><span>0</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="9"><span>9</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="6"><span>6</span></button>\
	<button class="simple-calc__square js-simple-calc-btn" data-function="3"><span>3</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--operator" data-function="."><span>,</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--operator simple-calc__square--clear" data-function="c"><span>C</span></button>\
	<button class="simple-calc__square js-simple-calc-btn simple-calc__square simple-calc__square--empty" data-function=""><span></span></button>\
	<button class="simple-calc__square simple-calc__square--disabled js-simple-calc-btn simple-calc__square--double simple-calc__square simple-calc__square simple-calc__square--confirmation" data-function="="><span>=</span></button>\
</div>');
	this.siblings('.js-simple-calc').simpleCalcInit();

	return this;
};

$.fn.simpleCalcInit = function (options = []) {
	if (!this.length > 0) {
		return this;
	}

	var settings = {
		buttonsWhenNeedLock: false,//кнопки для блокировки(false или jquery список элементов)
	};
	if (options.length > 0) {
		options.forEach(function (value, key) {
			settings[key] = value;
		});
	}



	//var operatorsArr=['/','*','-','+',',','c','='];
	//let regexpOperators = /[\/\*\-\+\,c\=]/g;
	var operatorsArr = ['/', '*', '-', '+'];
	var operatorsWithSpacesArr = [' / ', ' * ', ' - ', ' + '];
	var operatorsWithSpacesRegExp = RegExp(' [/*-+] ', 'g');
	let regexpOperators = /[\/\*\-\+]/g;
	//this.css( "background", "green" );
	console.log(this);
	console.log(1);

	/*input.trigger( "simpleCalc:change");
	/*input.trigger( "simpleCalc:processingFinished");//вычесление завершено
	input.trigger( "simpleCalc:operatorAdded" );
	input.trigger( "simpleCalc:operatorRemoved" );
	input.trigger( "simpleCalc:operatorReplaced" );//при том что есть оператор - нажали другой, произведены вычисления и добавлен новый*/


	function buttonsLock(needLock, input) {
		var btns = input.siblings('.simple-calc').find('[data-function="="]');
		if (needLock) {
			btns.addClass('simple-calc__square--disabled');
		}
		else {
			btns.removeClass('simple-calc__square--disabled');
		}
	}

	this.siblings('.js-simple-calc-inp').on("simpleCalc:processingFinished simpleCalc:operatorRemoved", function () {
		console.log('triggered_on');
		buttonsLock(true, $(this));
	});

	function processOperations(input) {
		var val = input.val();
		var parts = val.split(" ");

		if (parts.length < 3) {
			console.log('err_100');
			return;
			//недостаточно для вычисления
		}
		if (parts.length > 3) {
			console.log('err_101');
			return;
			//избыточно для вычисления, такого не должно быть
		}
		var operation_left = undefined;
		var operation_operator = undefined;
		var operation_right = undefined;

		parts.forEach(element => {
			if (element.length === 1 && operatorsArr.includes(element)) {
				//это оператор
				operation_operator = element;
			} else {
				//это число
				var temp = parseFloat(element);
				if (!isNaN(temp)) {
					if (typeof (operation_left) === 'undefined') {
						operation_left = temp;
					}
					else {
						operation_right = temp;
					}
				}
			}

			if (typeof (operation_left) !== 'undefined' && typeof (operation_operator) !== 'undefined' && typeof (operation_right) !== 'undefined') {
				var result = undefined;
				switch (operation_operator) {
					case '/':
						result = operation_left / operation_right;
						break;
					case '*':
						result = operation_left * operation_right;
						break;
					case '-':
						result = operation_left - operation_right;
						break;
					case '+':
						result = operation_left + operation_right;
						break;
				}
				input.val(result);
			}

		});
		/*
				let matchAll = val.matchAll(operatorsWithSpacesRegExp);
				matchAll = Array.from(matchAll);
				console.log(matchAll);*/

		console.log('trigger_processingFinished');
		input.trigger("simpleCalc:processingFinished");
	}

	function enterValue(input, char) {
		//console.log(input);
		//console.log(char);
		var val = input.val();
		//input.val(input.val().slice(0, -1))
		switch (char) {
			case '/':
			case '*':
			case '-':
			case '+':
				if (!(val.length == 0 || val[val.length - 1] == " ")) {

					let matchAll = val.matchAll(operatorsWithSpacesRegExp);
					matchAll = Array.from(matchAll); // теперь массив*/
					if (matchAll.length > 0) { //оператор есть
						processOperations(input);
						var val = input.val(); //сначала выполним рассчёты, затем обновим value
						//добавим новый оператор
						input.val(val + " " + char + " ");
						input.trigger("simpleCalc:operatorReplaced");
					} else { //операторов нет
						//добавим новый оператор
						input.val(val + " " + char + " ");
						input.trigger("simpleCalc:operatorAdded");
					}
				}
				break;
			case '7':
			case '4':
			case '1':
			case '8':
			case '5':
			case '2':
			case '9':
			case '6':
			case '3':
				if (val[val.length - 1] == " ") {
					buttonsLock(false, input);
				}

				input.val(val + char);
				break;
			case '0':
				/*if (!(val.length == 0 || val[val.length - 1] == " ")) {
					input.val(val + char);
				}*/
				if (!((val.length >= 2 && val[val.length - 2] === " " && val[val.length - 1] == "0") || (val.length === 1 && val[val.length - 1] === "0"))) {
					input.val(val + char);
					if (val[val.length - 1] == " ") {
						buttonsLock(false, input);
					}
				}

				break;
			case '.':
				if (!(val.length == 0 || val[val.length - 1] == " " || val[val.length - 1] == ".")) {

					let matchAll = val.matchAll(operatorsWithSpacesRegExp);
					matchAll = Array.from(matchAll); // теперь массив*/
					if (matchAll.length > 0) { //оператор есть
						let splitted = val.split(operatorsWithSpacesRegExp);
						if (splitted[1] === '' || splitted[1].indexOf('.') !== -1) {
							//ничего не введено после оператора
							//или точка уже есть
							//ТО точку нельзя
						} else {
							input.val(val + char);
						}
					} else { //оператора в строке нет
						if (val === '' || val.indexOf('.') !== -1) {
							//ничего не введено
							//или точка уже есть
							//ТО точку нельзя
						} else {
							input.val(val + char);
						}

					}
				}
				break;
			case 'c':
				//если пробел то ранее указан оператор
				if (val.length > 0) {
					if (val[val.length - 1] === " ") {
						input.val(val.slice(0, -3));
						input.trigger("simpleCalc:operatorRemoved");
					} else {
						input.val(val.slice(0, -1));
					}

					val = input.val();
					if (val[val.length - 1] == " ") {
						buttonsLock(true, input);
					}
				}
				break;
			case '=':
				processOperations(input);
				break;
		}
	}



	this.each(function (index) {
		var item = $(this);
		var inp = item.siblings('.js-simple-calc-inp').addClass('inp-simple-calc-init');
		console.log(inp);

		inp.on('blur', function () {
			/*operatorsArr.forEach( function(element){
				element
			});
			inp.val().replace(' ',''.split('');*/
		});

		//на мобилке беда с этими событиями. Отключу через превентдефолт для сенсорных девайсов и будет норм
		inp.on('keydown', function (e) {
			if (!e.which && ((e.charCode || e.charCode === 0) ? e.charCode : e.keyCode)) {
				e.which = e.charCode || e.keyCode;
			}
			var code = e.which;

			if (code === 8) { //61='=', 44='\r'(enter)
				e.preventDefault();
				char = "c";
				enterValue(inp, char);
			}
		});

		inp.on('keypress', function (e) {
			e.preventDefault();
			/*console.log('keypress');
			console.log(e);*/
			if (!e.which && ((e.charCode || e.charCode === 0) ? e.charCode : e.keyCode)) {
				e.which = e.charCode || e.keyCode;
			}
			var code = e.which;
			/*console.log(code);
			console.log(String.fromCharCode(code));*/
			var char = "";
			if (code >= 48 && code <= 57) { //0-9
				char = String.fromCharCode(code);
			}
			if (code === 46 || code === 44) { //46='.', 44=','
				char = ".";
			}
			if (code === 61 || code === 13) { //61='=', 44='\r'(enter)
				char = "=";
			}
			if (code === 47 || code === 42 || code === 45 || code === 43) { //47='/', 42='*', 45='-', 43='+',
				char = String.fromCharCode(code);
			}
			if (code === 8) { //61='=', 44='\r'(enter)
				char = "c";
			}
			if (char !== "") {
				enterValue(inp, char);
			}

		});

		/*cut copy */
		inp.on("paste", function (e) {
			e.preventDefault();
			/*var val = e.originalEvent.clipboardData.getData('text').replace(',', '.');
			val = numeral(val);
			console.log(val.value());
			if (val.value() !== null) {
				inp.val(val.format('0,0.00'));
			}*/
			var val = e.originalEvent.clipboardData.getData('text').replace(',', '.').replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, '$1');
			inp.val(val);
			/*Решил что вставка с операторами не нужна

			let matchAll = inp.val().matchAll(regexpOperators);
			matchAll = Array.from(matchAll); // теперь массив*/
			//this.value.replace('.',',');

			//	this.value =  this.value.replace('.',',').replace(/{2,}/g, "");
		});

		item.find('.js-simple-calc-btn').click(function () {
			var btn = $(this);
			var type = btn.attr('data-function');
			enterValue(inp, type);

			/*if(operatorsArr.includes(type)){//если нажат оператор(/*-+), то проверим нет ли уже операторов
				let matchAll = inp.val().matchAll(regexpOperators);
				matchAll = Array.from(matchAll); // теперь массив

				if(matchAll.length>0){
					if(matchAll.length>1){
						alert('error22');
						return;
					}
					console.log(matchAll);
					alert('=');
					console.log(matchAll[0]['index']);
					//тут выполнить рассчёты если оператор не в конце строки. Если в конце - заменить
					//!!!после убрать return
					return;
				}
			}
*/
		});
	});
	return this;
}

/*
'/'
'*'
'-'
'+'
'7'
'4'
'1'
'8'
'5'
'2'
'0'
'9'
'6'
'3'
','
'c'
'='
*/