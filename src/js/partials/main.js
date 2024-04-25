/*function chartAddData(chart, label, data) {
	chart.data.labels.push(label);
	chart.data.datasets.forEach((dataset) => {
		dataset.data.push(data);
	});
	chart.update();
}

function chartRemoveData(chart) {

	chart.data.labels.forEach((dataset) => {
		chart.data.labels.pop();
	});
	chart.data.datasets.forEach((dataset) => {
		dataset.data.pop();
		dataset.forEach((dataset) => {
			dataset.data.pop();
		});
	});
	chart.update();
}
incomesCatPie.data.datasets.forEach((dataset) => {
	dataset.data.forEach((data) => {
		incomesCatPie.removeData( )
	});
});
incomesCatPie.update();
*/
//[100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
function chartChangeData(chart, labels, data) {
	var dataNew = {
		labels: labels,
		datasets: [{
			label: 'My First Dataset',
			data: data,
			backgroundColor: mixedColors,
			hoverOffset: 4
		}]
	};
	chart["config"]["data"] = dataNew; //<--- THIS WORKS!
	chart.update();
}


var incomesCatPie;
var expencesCatPie;
var incomesCatLines;
var expencesCatLines;

var periodIncomesLines;
var periodExpencesLines;
var periodBalanceLines;
var periodSummaryLines;






$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");

	$(".js-date-time").flatpickr({
		"locale": "ru",
		enableTime: true,
		minDate: "2000-01",
		dateFormat: "Y-m-d H:i",
		defaultDate: new Date(),
		time_24hr: true
	});

	var simpleBarOptions = {
		autoHide: false,
		/*
		option1: value1,
		option2: value2
		*/
	};

	$('.js-table-scrollbar').each(function () {
		new SimpleBar($(this)[0], simpleBarOptions);
	});
	$('#recordsInSidebar').each(function () {
		new SimpleBar($(this)[0], simpleBarOptions);
	});
	/*
		if ($('.js-table-scrollbar--incomes-1').length > 0) {
			const SB_Incomes1 = new SimpleBar($('.js-table-scrollbar--incomes-1')[0], simpleBarOptions);
		}
		if ($('.js-table-scrollbar--incomes-2').length > 0) {
			const SB_Incomes2 = new SimpleBar($('.js-table-scrollbar--incomes-2')[0], simpleBarOptions);
		}
		if ($('.js-table-scrollbar--stats-1').length > 0) {
			const SB_Stats1 = new SimpleBar($('.js-table-scrollbar--stats-1')[0], simpleBarOptions);
		}
		if ($('.js-table-scrollbar--stats-2').length > 0) {
			const SB_Stats2 = new SimpleBar($('.js-table-scrollbar--stats-2')[0], simpleBarOptions);
		}
		if ($('.js-table-scrollbar--stats-11').length > 0) {
			const SB_Stats11 = new SimpleBar($('.js-table-scrollbar--stats-11')[0], simpleBarOptions);
		}
		if ($('.js-table-scrollbar--stats-12').length > 0) {
			const SB_Stats12 = new SimpleBar($('.js-table-scrollbar--stats-12')[0], simpleBarOptions);
		}
		if ($('#recordsInSidebar').length > 0) {
			const recordsInSidebar = new SimpleBar($('#recordsInSidebar')[0], simpleBarOptions);
		}
		*/

	//simpleBar.getContentElement();




	var initPageNumber = new Url().query.page;
	console.log(initPageNumber);
	if (initPageNumber && typeof (initPageNumber) !== 'undefined') {

	}
	else {
		initPageNumber = 1;
	}

	items_count = 1000;
	per_page = 10;

	//!!!!!!!!!
	$('#pagination-wrap').pagination({
		items: items_count,
		itemsOnPage: per_page,
		currentPage: initPageNumber,
		cssStyle: 'my-theme',
		ellipsePageSet: false,
		displayedPages: 3,
		edges: 1,
		prevText: "Prev",
		nextText: "Next",
		useAnchors: false,
		onPageClick: function (pageNumber, event) {

			var u = new Url();
			u.query.page = pageNumber;
			//delete(u.query.search);
			history.pushState(null, null, u.toString());
			ajax_get_table();
		}
	});

	setTimeout(function () {
		if (items_count > per_page) {
			$('#pagination-wrap').css('opacity', 1);
		}
		else {
			$('#pagination-wrap').css('opacity', 0);
		}
	}, 150);



	$('[data-fancybox]').fancybox({
		//closeClickOutside: false,
		autoFocus: false,
		toolbar: false,
		touch: false,
		btnTpl: {
			close: '<button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">' +
				'<svg class="bytesize-icon bytesize-icon--i-close"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#212121" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 30 L30 2 M30 30 L2 2" /></svg>' +
				"</button>",
			smallBtn: '<button type="button" data-fancybox-close="" class="fancybox-button fancybox-close-small" title="Close">' +
				'<svg class="bytesize-icon bytesize-icon--i-close"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="#212121" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M2 30 L30 2 M30 30 L2 2" /></svg>' +
				"</button>"
		}
	});


	autosize($('textarea'));


	$('.js-custom-select').select2({
		width: '100%'
	});


	$('body').on('click', '.tabs-controls-item:not(.tabs-controls-item--active)', function () {
		var $this = $(this);
		$this.addClass('tabs-controls-item--active').siblings('.tabs-controls-item--active').removeClass('tabs-controls-item--active');
		var id = $this.index();
		var target_tabs = $($this.closest('.tabs-controls').attr('data-target')).find('.tabs__tab');
		target_tabs.removeClass('tabs__tab--active').eq(id).addClass('tabs__tab--active');

	});
	/*colorIncomes
	colorExpences
	colorBalance*/

	if ($('#periodIncomesLines').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [{
				label: 'Доходы',
				data: [28249, 0, 0, 0, 0, 0, 301, 566, 547, 219, 825, 722, 404, 308, 682, 121, 426, 232, 283, 736, 288, 200, 328, 363, 655, 547, 489, 417, 266, 517, 854, 239, 107, 512, 184, 209, 284, 851, 671, 428, 855, 867, 630, 729, 179, 448, 746, 753, 443, 446],
				fill: false,
				borderColor: colorIncomes,
				tension: 0.1
			}
			]
		};
		const config = {
			type: 'line',
			data: data,
			options: {
				tooltips: {
					//cornerRadius: 0
				},

			}
		};
		const ctx = document.getElementById('periodIncomesLines').getContext('2d');
		periodIncomesLines = new Chart(ctx, config);
	}
	if ($('#periodExpencesLines').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [
				{
					label: 'Расходы',
					data: [701, 431, 709, 671, 423, 842, 749, 191, 448, 374, 788, 787, 979, 612, 249, 589, 249, 562, 868, 511, 753, 528, 446, 874, 993, 409, 577, 178, 600, 869, 604, 827, 813, 517, 184, 501, 502, 945, 549, 937, 501, 381, 234, 183, 538, 810, 951, 412, 472, 713],
					fill: false,
					borderColor: colorExpences,
					tension: 0.1
				}
			]
		};
		const config = {
			type: 'line',
			data: data,
			options: {
				tooltips: {
					//cornerRadius: 0
				},

			}
		};
		const ctx = document.getElementById('periodExpencesLines').getContext('2d');
		periodExpencesLines = new Chart(ctx, config);
	}

	if ($('#periodSummaryLines').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [{
				label: 'Доходы',
				data: [28249, 0, 0, 0, 0, 0, 301, 566, 547, 219, 825, 722, 404, 308, 682, 121, 426, 232, 283, 736, 288, 200, 328, 363, 655, 547, 489, 417, 266, 517, 854, 239, 107, 512, 184, 209, 284, 851, 671, 428, 855, 867, 630, 729, 179, 448, 746, 753, 443, 446],
				fill: false,
				borderColor: colorIncomes,
				tension: 0.1
			},
			{
				label: 'Расходы',
				data: [701, 431, 709, 671, 423, 842, 749, 191, 448, 374, 788, 787, 979, 612, 249, 589, 249, 562, 868, 511, 753, 528, 446, 874, 993, 409, 577, 178, 600, 869, 604, 827, 813, 517, 184, 501, 502, 945, 549, 937, 501, 381, 234, 183, 538, 810, 951, 412, 472, 713],
				fill: false,
				borderColor: colorExpences,
				tension: 0.1
			},
			{
				label: 'Баланс',
				data: [28249, 27321, 29571, 25204, 26799, 26480, 26057, 27623, 25931, 26229, 27286, 26269, 29365, 29199, 25079, 26295, 26166, 27570, 25136, 26888, 26560, 26752, 28441, 26622, 26154, 28305, 26120, 29665, 28193, 26166, 28144, 28667, 27308, 28897, 25323, 25507, 27286, 27250, 26266, 28367, 29313, 25280, 29730, 26336, 28597, 27458, 27565, 27281, 27373, 29993],
				fill: false,
				borderColor: colorBalance,
				tension: 0.1
			}
			]
		};
		const config = {
			type: 'line',
			data: data,
			options: {
				tooltips: {
					//cornerRadius: 0
				},

			}
		};
		const ctx = document.getElementById('periodSummaryLines').getContext('2d');
		periodSummaryLines = new Chart(ctx, config);
	}



	if ($('#periodBalanceLines').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [
				{
					label: 'Баланс',
					data: [28249, 27321, 29571, 25204, 26799, 26480, 26057, 27623, 25931, 26229, 27286, 26269, 29365, 29199, 25079, 26295, 26166, 27570, 25136, 26888, 26560, 26752, 28441, 26622, 26154, 28305, 26120, 29665, 28193, 26166, 28144, 28667, 27308, 28897, 25323, 25507, 27286, 27250, 26266, 28367, 29313, 25280, 29730, 26336, 28597, 27458, 27565, 27281, 27373, 29993],
					fill: false,
					borderColor: colorBalance,
					tension: 0.1
				}
			]
		};
		const config = {
			type: 'line',
			data: data,
			options: {
				tooltips: {
					//cornerRadius: 0
				},

			}
		};
		const ctx = document.getElementById('periodBalanceLines').getContext('2d');
		periodBalanceLines = new Chart(ctx, config);
	}



	if ($('#incomesCatPie').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [{
				label: 'My First Dataset',
				data: [719, 506, 705, 898, 921, 803, 301, 566, 547, 219, 825, 722, 404, 308, 682, 121, 426, 232, 283, 736, 288, 200, 328, 363, 655, 547, 489, 417, 266, 517, 854, 239, 107, 512, 184, 209, 284, 851, 671, 428, 855, 867, 630, 729, 179, 448, 746, 753, 443, 446],
				backgroundColor: mixedColors,
				hoverOffset: 8
			}
			]
		};
		const config = {
			type: 'doughnut',
			data: data,
			options: {
				tooltips: {
					//cornerRadius: 0
				},

			}
		};
		const ctx = document.getElementById('incomesCatPie').getContext('2d');
		incomesCatPie = new Chart(ctx, config);
	}

	if ($('#expencesCatPie').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [{
				label: 'My First Dataset',
				data: [701, 431, 709, 671, 423, 842, 749, 191, 448, 374, 788, 787, 979, 612, 249, 589, 249, 562, 868, 511, 753, 528, 446, 874, 993, 409, 577, 178, 600, 869, 604, 827, 813, 517, 184, 501, 502, 945, 549, 937, 501, 381, 234, 183, 538, 810, 951, 412, 472, 713],
				backgroundColor: mixedColors,
				hoverOffset: 4
			}]
		};
		const config = {
			type: 'doughnut',
			data: data,

		};
		const ctx = document.getElementById('expencesCatPie').getContext('2d');
		expencesCatPie = new Chart(ctx, config);
	}






	if ($('#incomesCatLines').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [{
				label: 'Cat 1',
				data: [719, 506, 705, 898, 921, 803, 301, 566, 547, 219, 825, 722, 404, 308, 682, 121, 426, 232, 283, 736, 288, 200, 328, 363, 655, 547, 489, 417, 266, 517, 854, 239, 107, 512, 184, 209, 284, 851, 671, 428, 855, 867, 630, 729, 179, 448, 746, 753, 443, 446],
				fill: false,
				borderColor: mixedNoRedColors[0],
				tension: 0.1
			},
			{
				label: 'Cat 2',
				data: [701, 431, 709, 671, 423, 842, 749, 191, 448, 374, 788, 787, 979, 612, 249, 589, 249, 562, 868, 511, 753, 528, 446, 874, 993, 409, 577, 178, 600, 869, 604, 827, 813, 517, 184, 501, 502, 945, 549, 937, 501, 381, 234, 183, 538, 810, 951, 412, 472, 713],
				fill: false,
				borderColor: mixedNoRedColors[1],
				tension: 0.1
			}
			]
		};
		const config = {
			type: 'line',
			data: data,
			options: {
				tooltips: {
					//cornerRadius: 0
				},

			}
		};
		const ctx = document.getElementById('incomesCatLines').getContext('2d');
		incomesCatPie = new Chart(ctx, config);
	}

	if ($('#expencesCatLines').length > 0) {
		const data = {
			labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
			datasets: [{
				label: 'Cat 1',
				data: [719, 506, 705, 898, 921, 803, 301, 566, 547, 219, 825, 722, 404, 308, 682, 121, 426, 232, 283, 736, 288, 200, 328, 363, 655, 547, 489, 417, 266, 517, 854, 239, 107, 512, 184, 209, 284, 851, 671, 428, 855, 867, 630, 729, 179, 448, 746, 753, 443, 446],
				fill: false,
				borderColor: mixedNoGreenColors[0],
				tension: 0.1
			},
			{
				label: 'Cat 2',
				data: [701, 431, 709, 671, 423, 842, 749, 191, 448, 374, 788, 787, 979, 612, 249, 589, 249, 562, 868, 511, 753, 528, 446, 874, 993, 409, 577, 178, 600, 869, 604, 827, 813, 517, 184, 501, 502, 945, 549, 937, 501, 381, 234, 183, 538, 810, 951, 412, 472, 713],
				fill: false,
				borderColor: mixedNoGreenColors[1],
				tension: 0.1
			}
			]
		};
		const config = {
			type: 'line',
			data: data,

		};
		const ctx = document.getElementById('expencesCatLines').getContext('2d');
		expencesCatPie = new Chart(ctx, config);
	}







	/*
		$(".js-colorpicker").spectrum({
			color: "#f00"
		});

		input.js-colorpicker(type="text", name="")
		input.js-colorpicker(type="text", name="")
	*/

	$('.js-simple-calc-inp').simpleCalc();

	$('body').on('change', '.js-show-password-chb', function () {
		if ($(this).is(':checked')) {
			$(this).closest('form').find('.js-show-password-chb').prop("checked", true);
			$(this).closest('form').find('.js-pwd-inp').attr('type', 'text');
		} else {
			$(this).closest('form').find('.js-show-password-chb').prop("checked", false);
			$(this).closest('form').find('.js-pwd-inp').attr('type', 'password');
		}
	});

	/*
	//вынес в шапку для скорости

	var localSwitchOptionsArray = [{
		'changeClassTargetSelector': 'html',
		'changableClass': 'dark-theme',
		'localStoragePropName': 'darkTheme',
		'enabledVal': 'true',
		'switchSelector': '.js-change-local-option[name="dark-theme-switch"]'
	},
	{
		'changeClassTargetSelector': 'html',
		'changableClass': 'html--hide-logo',
		'localStoragePropName': 'hideLogo',
		'enabledVal': 'true',
		'switchSelector': '.js-change-local-option[name="show-logo-switch"]'
	}];


	localSwitchOptionsArray.forEach(element => {
		$(element['switchSelector']).on('change', function () {
			if ($(this).is(':checked')) {
				$(element['changeClassTargetSelector']).addClass(element['changableClass']);
				localStorage.setItem(element['localStoragePropName'], element['enabledVal']);
			}
			else {
				$(element['changeClassTargetSelector']).removeClass(element['changableClass']);
				localStorage.setItem(element['localStoragePropName'], 'false');
			}
		});

	//отработает при загрузке страницы
		if (localStorage.hasOwnProperty(element['localStoragePropName'])) {
			let optionInStorage = localStorage.getItem(element['localStoragePropName']) === element['enabledVal'];
			if (optionInStorage) {
				$(element['changeClassTargetSelector']).addClass(element['changableClass']);
				$(element['switchSelector']).prop("checked", true);
			}
			else {
				$(element['changeClassTargetSelector']).removeClass(element['changableClass']);
				$(element['switchSelector']).prop("checked", false);
			}
		}
	});

*/
	/*
		Swal.fire({
			title: 'Error!',
			text: 'Do you want to continue',
			icon: 'error',
			//confirmButtonText: 'Cool'
		});
		Swal.fire({
			title: 'Good job!',
			text: 'You clicked the button!',
			icon: 'success'
		});
		Swal.fire({
			title: 'Do you want to save the changes?',
			showDenyButton: true,
			showCancelButton: true,
			confirmButtonText: 'Save',
			denyButtonText: `Don't save`,
		}).then((result) => {
			// Read more about isConfirmed, isDenied below
			if (result.isConfirmed) {
				Swal.fire('Saved!', '', 'success')
			} else if (result.isDenied) {
				Swal.fire('Changes are not saved', '', 'info')
			}
		});*/
	function validateField($this) {
		//var reg_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var reg_email = /.+@.+/;
		currentValid = true;

		switch ($this.attr('data-validate-type')) {
			case 'non-empty':
				if ($this.val().length > 0) {
				}
				else {
					currentValid = false;
				}
				break;
			case 'checked':
				if ($this.is(':checked')) {
				}
				else {
					currentValid = false;
				}
				break;
			case 'integer':
				var val = parseInt($this.val());

				if (!isNaN(val)) {
					$this.val(val);
				}
				else {
					Swal.fire({
						title: 'Ошибка!',
						text: 'Поле  "' + $this.siblings('.inp-name').text() + '" должно содержать  целочисленное значение',
						icon: 'error',
						confirmButtonText: 'Ок'
					});
					currentValid = false;
				}
				break;
			case 'symbols-count':
				var min = 0;
				var max = 9999;

				var tempMinAttr = parseInt($this.attr('data-min-length'));
				var tempMaxAttr = parseInt($this.attr('data-max-length'));

				if (!isNaN(tempMinAttr)) { min = tempMinAttr; }
				if (!isNaN(tempMaxAttr)) { max = tempMaxAttr; }
				if ($this.val().length <= max && $this.val().length >= min) {
				}
				else {
					Swal.fire({
						title: 'Ошибка!',
						text: 'Длина(x) содержимого поля "' + $this.siblings('.inp-name').text() + '" должна находиться в диапазоне ' + min + '>=x<=' + max,
						icon: 'error',
						confirmButtonText: 'Ок'
					});
					currentValid = false;
				}
				break;
			case 'email':
				$this.val($.trim($this.val()));
				if ($this.val().length > 0 && $this.val().match(reg_email)) {
				}
				else {
					currentValid = false;
				}
				break;
			case 'password':

				if ($this.val().length > 0) {
					var regexpr = /^(?=.*\d+)[\-\/\\.,:;\?!\"'`_\(\)\[\] a-zA-ZÀ-ÿ0-9]{8,}$/;
					if (regexpr.test($this.val())) {
					} else {
						Swal.fire({
							title: 'Ошибка!',
							text: 'Используйте, пожалуйста, не менее 8 символов, среди которых есть хотя бы одна цифра. Символы должны входить в диапазон [a-zA-Z0-9.,:;?!_-]',
							icon: 'error',
							confirmButtonText: 'Ок'
						});
						currentValid = false;
					}
				}
				else {
					currentValid = false;
				}
				break;

			case '2ndPassword':
				var pwdInp1 = $($this.attr('data-first-pwd-inp-selector'));
				if ($this.val() === pwdInp1.val()) {
				}
				else {
					if (!pwdInp1.parent().hasClass('inp-wrap--invalid')) {
						Swal.fire({
							title: 'Ошибка!',
							text: 'Введённые пароли не соответствуют друг другу',
							icon: 'error',
							confirmButtonText: 'Ок'
						});
					}
					currentValid = false;
				}
				break;
			default:
				break;
		}
		if (currentValid) {
			$this.closest('.inp-wrap').removeClass('inp-wrap--invalid');

		} else {
			$this.closest('.inp-wrap').addClass('inp-wrap--invalid');

			valid = false;
		}
		return currentValid;
	}

	//data-first-pwd-inp-selector


	$('body').on('submit', '.js-need-validate-form', function (e) {
		e.preventDefault()
		var valid = true;
		var form = $(e.target);
		if (form.find('[data-validate-type]').length > 0) {

			var inputs = form.find('[data-validate-type]');
			inputs.each(function () {
				$this = $(this);

				if (!validateField($this)) {
					valid = false;
				}

			});

			if (valid) {
				e.target.submit();
			}
			else {

			}
		}
		else {
			e.target.submit();
		}

	});



	$('body').on('submit', '.js-vet-calc-1', function (e) {
		e.preventDefault()
		var valid = true;
		var form = $(e.target);
		if (form.find('[data-validate-type]').length > 0) {

			var inputs = form.find('[data-validate-type]');
			inputs.each(function () {
				$this = $(this);

				if (!validateField($this)) {
					valid = false;
				}

			});

		}
		else {
		}
		if (valid) {
			var concentration = parseFloat(form.find('[name="concentration"]').val());
			var dose = parseFloat(form.find('[name="dose"]').val());
			var weight = parseFloat(form.find('[name="weight"]').val());
			var diluted_main = parseFloat(form.find('[name="diluted_main"]').val());
			var diluted_diluent = parseFloat(form.find('[name="diluted_diluent"]').val());
			var result = form.find('[name="result"]');

			var resut_val=(diluted_main+diluted_diluent)/(concentration*diluted_main)*(dose*weight);
			result.val(resut_val.toFixed(3));
		}
		else {
			//alert
		}

	});
	$('body').on('change input', '.js-vet-calc-1 *', function (e) {
		var form = $(e.target).closest('form');
		form.find('[name="result"]').val('');

	});
});


