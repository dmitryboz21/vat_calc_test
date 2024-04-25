/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}



var mdc_red_50 = '#FFEBEE';
var mdc_red_100 = '#FFCDD2';
var mdc_red_200 = '#EF9A9A';
var mdc_red_300 = '#E57373';
var mdc_red_400 = '#EF5350';
var mdc_red_500 = '#F44336';
var mdc_red_600 = '#E53935';
var mdc_red_700 = '#D32F2F';
var mdc_red_800 = '#C62828';
var mdc_red_900 = '#B71C1C';
var mdc_red_A100 = '#FF8A80';
var mdc_red_A200 = '#FF5252';
var mdc_red_A400 = '#FF1744';
var mdc_red_A700 = '#D50000';





var mdc_pink_50 = '#FCE4EC';
var mdc_pink_100 = '#F8BBD0';
var mdc_pink_200 = '#F48FB1';
var mdc_pink_300 = '#F06292';
var mdc_pink_400 = '#EC407A';
var mdc_pink_500 = '#E91E63';
var mdc_pink_600 = '#D81B60';
var mdc_pink_700 = '#C2185B';
var mdc_pink_800 = '#AD1457';
var mdc_pink_900 = '#880E4F';
var mdc_pink_A100 = '#FF80AB';
var mdc_pink_A200 = '#FF4081';
var mdc_pink_A400 = '#F50057';
var mdc_pink_A700 = '#C51162';


var mdc_purple_50 = '#F3E5F5';
var mdc_purple_100 = '#E1BEE7';
var mdc_purple_200 = '#CE93D8';
var mdc_purple_300 = '#BA68C8';
var mdc_purple_400 = '#AB47BC';
var mdc_purple_500 = '#9C27B0';
var mdc_purple_600 = '#8E24AA';
var mdc_purple_700 = '#7B1FA2';
var mdc_purple_800 = '#6A1B9A';
var mdc_purple_900 = '#4A148C';
var mdc_purple_A100 = '#EA80FC';
var mdc_purple_A200 = '#E040FB';
var mdc_purple_A400 = '#D500F9';
var mdc_purple_A700 = '#AA00FF';


var mdc_deep_purple_50 = '#EDE7F6';
var mdc_deep_purple_100 = '#D1C4E9';
var mdc_deep_purple_200 = '#B39DDB';
var mdc_deep_purple_300 = '#9575CD';
var mdc_deep_purple_400 = '#7E57C2';
var mdc_deep_purple_500 = '#673AB7';
var mdc_deep_purple_600 = '#5E35B1';
var mdc_deep_purple_700 = '#512DA8';
var mdc_deep_purple_800 = '#4527A0';
var mdc_deep_purple_900 = '#311B92';
var mdc_deep_purple_A100 = '#B388FF';
var mdc_deep_purple_A200 = '#7C4DFF';
var mdc_deep_purple_A400 = '#651FFF';
var mdc_deep_purple_A700 = '#6200EA';


var mdc_indigo_50 = '#E8EAF6';
var mdc_indigo_100 = '#C5CAE9';
var mdc_indigo_200 = '#9FA8DA';
var mdc_indigo_300 = '#7986CB';
var mdc_indigo_400 = '#5C6BC0';
var mdc_indigo_500 = '#3F51B5';
var mdc_indigo_600 = '#3949AB';
var mdc_indigo_700 = '#303F9F';
var mdc_indigo_800 = '#283593';
var mdc_indigo_900 = '#1A237E';
var mdc_indigo_A100 = '#8C9EFF';
var mdc_indigo_A200 = '#536DFE';
var mdc_indigo_A400 = '#3D5AFE';
var mdc_indigo_A700 = '#304FFE';


var mdc_blue_50 = '#E3F2FD';
var mdc_blue_100 = '#BBDEFB';
var mdc_blue_200 = '#90CAF9';
var mdc_blue_300 = '#64B5F6';
var mdc_blue_400 = '#42A5F5';
var mdc_blue_500 = '#2196F3';
var mdc_blue_600 = '#1E88E5';
var mdc_blue_700 = '#1976D2';
var mdc_blue_800 = '#1565C0';
var mdc_blue_900 = '#0D47A1';
var mdc_blue_A100 = '#82B1FF';
var mdc_blue_A200 = '#448AFF';
var mdc_blue_A400 = '#2979FF';
var mdc_blue_A700 = '#2962FF';


var mdc_light_blue_50 = '#E1F5FE';
var mdc_light_blue_100 = '#B3E5FC';
var mdc_light_blue_200 = '#81D4FA';
var mdc_light_blue_300 = '#4FC3F7';
var mdc_light_blue_400 = '#29B6F6';
var mdc_light_blue_500 = '#03A9F4';
var mdc_light_blue_600 = '#039BE5';
var mdc_light_blue_700 = '#0288D1';
var mdc_light_blue_800 = '#0277BD';
var mdc_light_blue_900 = '#01579B';
var mdc_light_blue_A100 = '#80D8FF';
var mdc_light_blue_A200 = '#40C4FF';
var mdc_light_blue_A400 = '#00B0FF';
var mdc_light_blue_A700 = '#0091EA';


var mdc_cyan_50 = '#E0F7FA';
var mdc_cyan_100 = '#B2EBF2';
var mdc_cyan_200 = '#80DEEA';
var mdc_cyan_300 = '#4DD0E1';
var mdc_cyan_400 = '#26C6DA';
var mdc_cyan_500 = '#00BCD4';
var mdc_cyan_600 = '#00ACC1';
var mdc_cyan_700 = '#0097A7';
var mdc_cyan_800 = '#00838F';
var mdc_cyan_900 = '#006064';
var mdc_cyan_A100 = '#84FFFF';
var mdc_cyan_A200 = '#18FFFF';
var mdc_cyan_A400 = '#00E5FF';
var mdc_cyan_A700 = '#00B8D4';


var mdc_teal_50 = '#E0F2F1';
var mdc_teal_100 = '#B2DFDB';
var mdc_teal_200 = '#80CBC4';
var mdc_teal_300 = '#4DB6AC';
var mdc_teal_400 = '#26A69A';
var mdc_teal_500 = '#009688';
var mdc_teal_600 = '#00897B';
var mdc_teal_700 = '#00796B';
var mdc_teal_800 = '#00695C';
var mdc_teal_900 = '#004D40';
var mdc_teal_A100 = '#A7FFEB';
var mdc_teal_A200 = '#64FFDA';
var mdc_teal_A400 = '#1DE9B6';
var mdc_teal_A700 = '#00BFA5';


var mdc_green_50 = '#E8F5E9';
var mdc_green_100 = '#C8E6C9';
var mdc_green_200 = '#A5D6A7';
var mdc_green_300 = '#81C784';
var mdc_green_400 = '#66BB6A';
var mdc_green_500 = '#4CAF50';
var mdc_green_600 = '#43A047';
var mdc_green_700 = '#388E3C';
var mdc_green_800 = '#2E7D32';
var mdc_green_900 = '#1B5E20';
var mdc_green_A100 = '#B9F6CA';
var mdc_green_A200 = '#69F0AE';
var mdc_green_A400 = '#00E676';
var mdc_green_A700 = '#00C853';


var mdc_light_green_50 = '#F1F8E9';
var mdc_light_green_100 = '#DCEDC8';
var mdc_light_green_200 = '#C5E1A5';
var mdc_light_green_300 = '#AED581';
var mdc_light_green_400 = '#9CCC65';
var mdc_light_green_500 = '#8BC34A';
var mdc_light_green_600 = '#7CB342';
var mdc_light_green_700 = '#689F38';
var mdc_light_green_800 = '#558B2F';
var mdc_light_green_900 = '#33691E';
var mdc_light_green_A100 = '#CCFF90';
var mdc_light_green_A200 = '#B2FF59';
var mdc_light_green_A400 = '#76FF03';
var mdc_light_green_A700 = '#64DD17';


var mdc_lime_50 = '#F9FBE7';
var mdc_lime_100 = '#F0F4C3';
var mdc_lime_200 = '#E6EE9C';
var mdc_lime_300 = '#DCE775';
var mdc_lime_400 = '#D4E157';
var mdc_lime_500 = '#CDDC39';
var mdc_lime_600 = '#C0CA33';
var mdc_lime_700 = '#AFB42B';
var mdc_lime_800 = '#9E9D24';
var mdc_lime_900 = '#827717';
var mdc_lime_A100 = '#F4FF81';
var mdc_lime_A200 = '#EEFF41';
var mdc_lime_A400 = '#C6FF00';
var mdc_lime_A700 = '#AEEA00';


var mdc_yellow_50 = '#FFFDE7';
var mdc_yellow_100 = '#FFF9C4';
var mdc_yellow_200 = '#FFF59D';
var mdc_yellow_300 = '#FFF176';
var mdc_yellow_400 = '#FFEE58';
var mdc_yellow_500 = '#FFEB3B';
var mdc_yellow_600 = '#FDD835';
var mdc_yellow_700 = '#FBC02D';
var mdc_yellow_800 = '#F9A825';
var mdc_yellow_900 = '#F57F17';
var mdc_yellow_A100 = '#FFFF8D';
var mdc_yellow_A200 = '#FFFF00';
var mdc_yellow_A400 = '#FFEA00';
var mdc_yellow_A700 = '#FFD600';


var mdc_amber_50 = '#FFF8E1';
var mdc_amber_100 = '#FFECB3';
var mdc_amber_200 = '#FFE082';
var mdc_amber_300 = '#FFD54F';
var mdc_amber_400 = '#FFCA28';
var mdc_amber_500 = '#FFC107';
var mdc_amber_600 = '#FFB300';
var mdc_amber_700 = '#FFA000';
var mdc_amber_800 = '#FF8F00';
var mdc_amber_900 = '#FF6F00';
var mdc_amber_A100 = '#FFE57F';
var mdc_amber_A200 = '#FFD740';
var mdc_amber_A400 = '#FFC400';
var mdc_amber_A700 = '#FFAB00';


var mdc_orange_50 = '#FFF3E0';
var mdc_orange_100 = '#FFE0B2';
var mdc_orange_200 = '#FFCC80';
var mdc_orange_300 = '#FFB74D';
var mdc_orange_400 = '#FFA726';
var mdc_orange_500 = '#FF9800';
var mdc_orange_600 = '#FB8C00';
var mdc_orange_700 = '#F57C00';
var mdc_orange_800 = '#EF6C00';
var mdc_orange_900 = '#E65100';
var mdc_orange_A100 = '#FFD180';
var mdc_orange_A200 = '#FFAB40';
var mdc_orange_A400 = '#FF9100';
var mdc_orange_A700 = '#FF6D00';


var mdc_deep_orange_50 = '#FBE9E7';
var mdc_deep_orange_100 = '#FFCCBC';
var mdc_deep_orange_200 = '#FFAB91';
var mdc_deep_orange_300 = '#FF8A65';
var mdc_deep_orange_400 = '#FF7043';
var mdc_deep_orange_500 = '#FF5722';
var mdc_deep_orange_600 = '#F4511E';
var mdc_deep_orange_700 = '#E64A19';
var mdc_deep_orange_800 = '#D84315';
var mdc_deep_orange_900 = '#BF360C';
var mdc_deep_orange_A100 = '#FF9E80';
var mdc_deep_orange_A200 = '#FF6E40';
var mdc_deep_orange_A400 = '#FF3D00';
var mdc_deep_orange_A700 = '#DD2C00';


var mdc_brown_50 = '#EFEBE9';
var mdc_brown_100 = '#D7CCC8';
var mdc_brown_200 = '#BCAAA4';
var mdc_brown_300 = '#A1887F';
var mdc_brown_400 = '#8D6E63';
var mdc_brown_500 = '#795548';
var mdc_brown_600 = '#6D4C41';
var mdc_brown_700 = '#5D4037';
var mdc_brown_800 = '#4E342E';
var mdc_brown_900 = '#3E2723';


var mdc_grey_50 = '#FAFAFA';
var mdc_grey_100 = '#F5F5F5';
var mdc_grey_200 = '#EEEEEE';
var mdc_grey_300 = '#E0E0E0';
var mdc_grey_400 = '#BDBDBD';
var mdc_grey_500 = '#9E9E9E';
var mdc_grey_600 = '#757575';
var mdc_grey_700 = '#616161';
var mdc_grey_800 = '#424242';
var mdc_grey_900 = '#212121';


var mdc_blue_grey_50 = '#ECEFF1';
var mdc_blue_grey_100 = '#CFD8DC';
var mdc_blue_grey_200 = '#B0BEC5';
var mdc_blue_grey_300 = '#90A4AE';
var mdc_blue_grey_400 = '#78909C';
var mdc_blue_grey_500 = '#607D8B';
var mdc_blue_grey_600 = '#546E7A';
var mdc_blue_grey_700 = '#455A64';
var mdc_blue_grey_800 = '#37474F';
var mdc_blue_grey_900 = '#263238';



const fullColorsArray=[mdc_red_50, mdc_pink_50, mdc_purple_50, mdc_deep_purple_50, mdc_indigo_50, mdc_blue_50, mdc_light_blue_50, mdc_cyan_50, mdc_teal_50, mdc_green_50, mdc_light_green_50, mdc_lime_50, mdc_yellow_50, mdc_amber_50, mdc_orange_50, mdc_deep_orange_50, mdc_brown_50, mdc_grey_50, mdc_blue_grey_50, mdc_red_100, mdc_pink_100, mdc_purple_100, mdc_deep_purple_100, mdc_indigo_100, mdc_blue_100, mdc_light_blue_100, mdc_cyan_100, mdc_teal_100, mdc_green_100, mdc_light_green_100, mdc_lime_100, mdc_yellow_100, mdc_amber_100, mdc_orange_100, mdc_deep_orange_100, mdc_brown_100, mdc_grey_100, mdc_blue_grey_100, mdc_red_200, mdc_pink_200, mdc_purple_200, mdc_deep_purple_200, mdc_indigo_200, mdc_blue_200, mdc_light_blue_200, mdc_cyan_200, mdc_teal_200, mdc_green_200, mdc_light_green_200, mdc_lime_200, mdc_yellow_200, mdc_amber_200, mdc_orange_200, mdc_deep_orange_200, mdc_brown_200, mdc_grey_200, mdc_blue_grey_200, mdc_red_300, mdc_pink_300, mdc_purple_300, mdc_deep_purple_300, mdc_indigo_300, mdc_blue_300, mdc_light_blue_300, mdc_cyan_300, mdc_teal_300, mdc_green_300, mdc_light_green_300, mdc_lime_300, mdc_yellow_300, mdc_amber_300, mdc_orange_300, mdc_deep_orange_300, mdc_brown_300, mdc_grey_300, mdc_blue_grey_300, mdc_red_400, mdc_pink_400, mdc_purple_400, mdc_deep_purple_400, mdc_indigo_400, mdc_blue_400, mdc_light_blue_400, mdc_cyan_400, mdc_teal_400, mdc_green_400, mdc_light_green_400, mdc_lime_400, mdc_yellow_400, mdc_amber_400, mdc_orange_400, mdc_deep_orange_400, mdc_brown_400, mdc_grey_400, mdc_blue_grey_400, mdc_red_500, mdc_pink_500, mdc_purple_500, mdc_deep_purple_500, mdc_indigo_500, mdc_blue_500, mdc_light_blue_500, mdc_cyan_500, mdc_teal_500, mdc_green_500, mdc_light_green_500, mdc_lime_500, mdc_yellow_500, mdc_amber_500, mdc_orange_500, mdc_deep_orange_500, mdc_brown_500, mdc_grey_500, mdc_blue_grey_500, mdc_red_600, mdc_pink_600, mdc_purple_600, mdc_deep_purple_600, mdc_indigo_600, mdc_blue_600, mdc_light_blue_600, mdc_cyan_600, mdc_teal_600, mdc_green_600, mdc_light_green_600, mdc_lime_600, mdc_yellow_600, mdc_amber_600, mdc_orange_600, mdc_deep_orange_600, mdc_brown_600, mdc_grey_600, mdc_blue_grey_600, mdc_red_700, mdc_pink_700, mdc_purple_700, mdc_deep_purple_700, mdc_indigo_700, mdc_blue_700, mdc_light_blue_700, mdc_cyan_700, mdc_teal_700, mdc_green_700, mdc_light_green_700, mdc_lime_700, mdc_yellow_700, mdc_amber_700, mdc_orange_700, mdc_deep_orange_700, mdc_brown_700, mdc_grey_700, mdc_blue_grey_700, mdc_red_800, mdc_pink_800, mdc_purple_800, mdc_deep_purple_800, mdc_indigo_800, mdc_blue_800, mdc_light_blue_800, mdc_cyan_800, mdc_teal_800, mdc_green_800, mdc_light_green_800, mdc_lime_800, mdc_yellow_800, mdc_amber_800, mdc_orange_800, mdc_deep_orange_800, mdc_brown_800, mdc_grey_800, mdc_blue_grey_800, mdc_red_900, mdc_pink_900, mdc_purple_900, mdc_deep_purple_900, mdc_indigo_900, mdc_blue_900, mdc_light_blue_900, mdc_cyan_900, mdc_teal_900, mdc_green_900, mdc_light_green_900, mdc_lime_900, mdc_yellow_900, mdc_amber_900, mdc_orange_900, mdc_deep_orange_900, mdc_brown_900, mdc_grey_900, mdc_blue_grey_900, mdc_red_A100, mdc_pink_A100, mdc_purple_A100, mdc_deep_purple_A100, mdc_indigo_A100, mdc_blue_A100, mdc_light_blue_A100, mdc_cyan_A100, mdc_teal_A100, mdc_green_A100, mdc_light_green_A100, mdc_lime_A100, mdc_yellow_A100, mdc_amber_A100, mdc_orange_A100, mdc_deep_orange_A100, mdc_red_A200, mdc_pink_A200, mdc_purple_A200, mdc_deep_purple_A200, mdc_indigo_A200, mdc_blue_A200, mdc_light_blue_A200, mdc_cyan_A200, mdc_teal_A200, mdc_green_A200, mdc_light_green_A200, mdc_lime_A200, mdc_yellow_A200, mdc_amber_A200, mdc_orange_A200, mdc_deep_orange_A200, mdc_red_A400, mdc_pink_A400, mdc_purple_A400, mdc_deep_purple_A400, mdc_indigo_A400, mdc_blue_A400, mdc_light_blue_A400, mdc_cyan_A400, mdc_teal_A400, mdc_green_A400, mdc_light_green_A400, mdc_lime_A400, mdc_yellow_A400, mdc_amber_A400, mdc_orange_A400, mdc_deep_orange_A400, mdc_red_A700, mdc_pink_A700, mdc_purple_A700, mdc_deep_purple_A700, mdc_indigo_A700, mdc_blue_A700, mdc_light_blue_A700, mdc_cyan_A700, mdc_teal_A700, mdc_green_A700, mdc_light_green_A700, mdc_lime_A700, mdc_yellow_A700, mdc_amber_A700, mdc_orange_A700, mdc_deep_orange_A700];


const colorsArray_50=[mdc_red_50, mdc_pink_50, mdc_purple_50, mdc_deep_purple_50, mdc_indigo_50, mdc_blue_50, mdc_light_blue_50, mdc_cyan_50, mdc_teal_50, mdc_green_50, mdc_light_green_50, mdc_lime_50, mdc_yellow_50, mdc_amber_50, mdc_orange_50, mdc_deep_orange_50, mdc_brown_50, mdc_grey_50, mdc_blue_grey_50];
const colorsArray_100=[mdc_red_100, mdc_pink_100, mdc_purple_100, mdc_deep_purple_100, mdc_indigo_100, mdc_blue_100, mdc_light_blue_100, mdc_cyan_100, mdc_teal_100, mdc_green_100, mdc_light_green_100, mdc_lime_100, mdc_yellow_100, mdc_amber_100, mdc_orange_100, mdc_deep_orange_100, mdc_brown_100, mdc_grey_100, mdc_blue_grey_100];
const colorsArray_200=[mdc_red_200, mdc_pink_200, mdc_purple_200, mdc_deep_purple_200, mdc_indigo_200, mdc_blue_200, mdc_light_blue_200, mdc_cyan_200, mdc_teal_200, mdc_green_200, mdc_light_green_200, mdc_lime_200, mdc_yellow_200, mdc_amber_200, mdc_orange_200, mdc_deep_orange_200, mdc_brown_200, mdc_grey_200, mdc_blue_grey_200];
const colorsArray_300=[mdc_red_300, mdc_pink_300, mdc_purple_300, mdc_deep_purple_300, mdc_indigo_300, mdc_blue_300, mdc_light_blue_300, mdc_cyan_300, mdc_teal_300, mdc_green_300, mdc_light_green_300, mdc_lime_300, mdc_yellow_300, mdc_amber_300, mdc_orange_300, mdc_deep_orange_300, mdc_brown_300, mdc_grey_300, mdc_blue_grey_300];
const colorsArray_400=[mdc_red_400, mdc_pink_400, mdc_purple_400, mdc_deep_purple_400, mdc_indigo_400, mdc_blue_400, mdc_light_blue_400, mdc_cyan_400, mdc_teal_400, mdc_green_400, mdc_light_green_400, mdc_lime_400, mdc_yellow_400, mdc_amber_400, mdc_orange_400, mdc_deep_orange_400, mdc_brown_400, mdc_grey_400, mdc_blue_grey_400];
const colorsArray_500=[mdc_red_500, mdc_pink_500, mdc_purple_500, mdc_deep_purple_500, mdc_indigo_500, mdc_blue_500, mdc_light_blue_500, mdc_cyan_500, mdc_teal_500, mdc_green_500, mdc_light_green_500, mdc_lime_500, mdc_yellow_500, mdc_amber_500, mdc_orange_500, mdc_deep_orange_500, mdc_brown_500, mdc_grey_500, mdc_blue_grey_500];
const colorsArray_600=[mdc_red_600, mdc_pink_600, mdc_purple_600, mdc_deep_purple_600, mdc_indigo_600, mdc_blue_600, mdc_light_blue_600, mdc_cyan_600, mdc_teal_600, mdc_green_600, mdc_light_green_600, mdc_lime_600, mdc_yellow_600, mdc_amber_600, mdc_orange_600, mdc_deep_orange_600, mdc_brown_600, mdc_grey_600, mdc_blue_grey_600];
const colorsArray_700=[mdc_red_700, mdc_pink_700, mdc_purple_700, mdc_deep_purple_700, mdc_indigo_700, mdc_blue_700, mdc_light_blue_700, mdc_cyan_700, mdc_teal_700, mdc_green_700, mdc_light_green_700, mdc_lime_700, mdc_yellow_700, mdc_amber_700, mdc_orange_700, mdc_deep_orange_700, mdc_brown_700, mdc_grey_700, mdc_blue_grey_700];
const colorsArray_800=[mdc_red_800, mdc_pink_800, mdc_purple_800, mdc_deep_purple_800, mdc_indigo_800, mdc_blue_800, mdc_light_blue_800, mdc_cyan_800, mdc_teal_800, mdc_green_800, mdc_light_green_800, mdc_lime_800, mdc_yellow_800, mdc_amber_800, mdc_orange_800, mdc_deep_orange_800, mdc_brown_800, mdc_grey_800, mdc_blue_grey_800];
const colorsArray_900=[mdc_red_900, mdc_pink_900, mdc_purple_900, mdc_deep_purple_900, mdc_indigo_900, mdc_blue_900, mdc_light_blue_900, mdc_cyan_900, mdc_teal_900, mdc_green_900, mdc_light_green_900, mdc_lime_900, mdc_yellow_900, mdc_amber_900, mdc_orange_900, mdc_deep_orange_900, mdc_brown_900, mdc_grey_900, mdc_blue_grey_900];
const colorsArray_A100=[mdc_red_A100, mdc_pink_A100, mdc_purple_A100, mdc_deep_purple_A100, mdc_indigo_A100, mdc_blue_A100, mdc_light_blue_A100, mdc_cyan_A100, mdc_teal_A100, mdc_green_A100, mdc_light_green_A100, mdc_lime_A100, mdc_yellow_A100, mdc_amber_A100, mdc_orange_A100, mdc_deep_orange_A100];
const colorsArray_A200=[mdc_red_A200, mdc_pink_A200, mdc_purple_A200, mdc_deep_purple_A200, mdc_indigo_A200, mdc_blue_A200, mdc_light_blue_A200, mdc_cyan_A200, mdc_teal_A200, mdc_green_A200, mdc_light_green_A200, mdc_lime_A200, mdc_yellow_A200, mdc_amber_A200, mdc_orange_A200, mdc_deep_orange_A200];
const colorsArray_A400=[mdc_red_A400, mdc_pink_A400, mdc_purple_A400, mdc_deep_purple_A400, mdc_indigo_A400, mdc_blue_A400, mdc_light_blue_A400, mdc_cyan_A400, mdc_teal_A400, mdc_green_A400, mdc_light_green_A400, mdc_lime_A400, mdc_yellow_A400, mdc_amber_A400, mdc_orange_A400, mdc_deep_orange_A400];
const colorsArray_A700=[mdc_red_A700, mdc_pink_A700, mdc_purple_A700, mdc_deep_purple_A700, mdc_indigo_A700, mdc_blue_A700, mdc_light_blue_A700, mdc_cyan_A700, mdc_teal_A700, mdc_green_A700, mdc_light_green_A700, mdc_lime_A700, mdc_yellow_A700, mdc_amber_A700, mdc_orange_A700, mdc_deep_orange_A700];

const mixedColors=colorsArray_600.concat(colorsArray_A700.concat(colorsArray_900.concat(colorsArray_300)));


const colorIncomes=mdc_green_600;
const colorExpences=mdc_red_600;
const colorBalance=mdc_blue_600;







const colorsNoRedArray_50=[ mdc_indigo_50, mdc_blue_50, mdc_light_blue_50, mdc_cyan_50, mdc_teal_50, mdc_green_50, mdc_light_green_50, mdc_lime_50, mdc_yellow_50, mdc_amber_50, mdc_orange_50, mdc_deep_orange_50, mdc_brown_50, mdc_grey_50, mdc_blue_grey_50];
const colorsNoRedArray_100=[ mdc_indigo_100, mdc_blue_100, mdc_light_blue_100, mdc_cyan_100, mdc_teal_100, mdc_green_100, mdc_light_green_100, mdc_lime_100, mdc_yellow_100, mdc_amber_100, mdc_orange_100, mdc_deep_orange_100, mdc_brown_100, mdc_grey_100, mdc_blue_grey_100];
const colorsNoRedArray_200=[ mdc_indigo_200, mdc_blue_200, mdc_light_blue_200, mdc_cyan_200, mdc_teal_200, mdc_green_200, mdc_light_green_200, mdc_lime_200, mdc_yellow_200, mdc_amber_200, mdc_orange_200, mdc_deep_orange_200, mdc_brown_200, mdc_grey_200, mdc_blue_grey_200];
const colorsNoRedArray_300=[ mdc_indigo_300, mdc_blue_300, mdc_light_blue_300, mdc_cyan_300, mdc_teal_300, mdc_green_300, mdc_light_green_300, mdc_lime_300, mdc_yellow_300, mdc_amber_300, mdc_orange_300, mdc_deep_orange_300, mdc_brown_300, mdc_grey_300, mdc_blue_grey_300];
const colorsNoRedArray_400=[ mdc_indigo_400, mdc_blue_400, mdc_light_blue_400, mdc_cyan_400, mdc_teal_400, mdc_green_400, mdc_light_green_400, mdc_lime_400, mdc_yellow_400, mdc_amber_400, mdc_orange_400, mdc_deep_orange_400, mdc_brown_400, mdc_grey_400, mdc_blue_grey_400];
const colorsNoRedArray_500=[ mdc_indigo_500, mdc_blue_500, mdc_light_blue_500, mdc_cyan_500, mdc_teal_500, mdc_green_500, mdc_light_green_500, mdc_lime_500, mdc_yellow_500, mdc_amber_500, mdc_orange_500, mdc_deep_orange_500, mdc_brown_500, mdc_grey_500, mdc_blue_grey_500];
const colorsNoRedArray_600=[ mdc_indigo_600, mdc_blue_600, mdc_light_blue_600, mdc_cyan_600, mdc_teal_600, mdc_green_600, mdc_light_green_600, mdc_lime_600, mdc_yellow_600, mdc_amber_600, mdc_orange_600, mdc_deep_orange_600, mdc_brown_600, mdc_grey_600, mdc_blue_grey_600];
const colorsNoRedArray_700=[ mdc_indigo_700, mdc_blue_700, mdc_light_blue_700, mdc_cyan_700, mdc_teal_700, mdc_green_700, mdc_light_green_700, mdc_lime_700, mdc_yellow_700, mdc_amber_700, mdc_orange_700, mdc_deep_orange_700, mdc_brown_700, mdc_grey_700, mdc_blue_grey_700];
const colorsNoRedArray_800=[ mdc_indigo_800, mdc_blue_800, mdc_light_blue_800, mdc_cyan_800, mdc_teal_800, mdc_green_800, mdc_light_green_800, mdc_lime_800, mdc_yellow_800, mdc_amber_800, mdc_orange_800, mdc_deep_orange_800, mdc_brown_800, mdc_grey_800, mdc_blue_grey_800];
const colorsNoRedArray_900=[ mdc_indigo_900, mdc_blue_900, mdc_light_blue_900, mdc_cyan_900, mdc_teal_900, mdc_green_900, mdc_light_green_900, mdc_lime_900, mdc_yellow_900, mdc_amber_900, mdc_orange_900, mdc_deep_orange_900, mdc_brown_900, mdc_grey_900, mdc_blue_grey_900];
const colorsNoRedArray_A100=[ mdc_indigo_A100, mdc_blue_A100, mdc_light_blue_A100, mdc_cyan_A100, mdc_teal_A100, mdc_green_A100, mdc_light_green_A100, mdc_lime_A100, mdc_yellow_A100, mdc_amber_A100, mdc_orange_A100, mdc_deep_orange_A100];
const colorsNoRedArray_A200=[ mdc_indigo_A200, mdc_blue_A200, mdc_light_blue_A200, mdc_cyan_A200, mdc_teal_A200, mdc_green_A200, mdc_light_green_A200, mdc_lime_A200, mdc_yellow_A200, mdc_amber_A200, mdc_orange_A200, mdc_deep_orange_A200];
const colorsNoRedArray_A400=[ mdc_indigo_A400, mdc_blue_A400, mdc_light_blue_A400, mdc_cyan_A400, mdc_teal_A400, mdc_green_A400, mdc_light_green_A400, mdc_lime_A400, mdc_yellow_A400, mdc_amber_A400, mdc_orange_A400, mdc_deep_orange_A400];
const colorsNoRedArray_A700=[ mdc_indigo_A700, mdc_blue_A700, mdc_light_blue_A700, mdc_cyan_A700, mdc_teal_A700, mdc_green_A700, mdc_light_green_A700, mdc_lime_A700, mdc_yellow_A700, mdc_amber_A700, mdc_orange_A700, mdc_deep_orange_A700];







const colorsNoGreenArray_50=[mdc_red_50, mdc_pink_50, mdc_purple_50, mdc_deep_purple_50, mdc_indigo_50, mdc_blue_50, mdc_light_blue_50, mdc_cyan_50, mdc_teal_50,  mdc_yellow_50, mdc_amber_50, mdc_orange_50, mdc_deep_orange_50, mdc_brown_50, mdc_grey_50, mdc_blue_grey_50];
const colorsNoGreenArray_100=[mdc_red_100, mdc_pink_100, mdc_purple_100, mdc_deep_purple_100, mdc_indigo_100, mdc_blue_100, mdc_light_blue_100, mdc_cyan_100, mdc_teal_100,  mdc_yellow_100, mdc_amber_100, mdc_orange_100, mdc_deep_orange_100, mdc_brown_100, mdc_grey_100, mdc_blue_grey_100];
const colorsNoGreenArray_200=[mdc_red_200, mdc_pink_200, mdc_purple_200, mdc_deep_purple_200, mdc_indigo_200, mdc_blue_200, mdc_light_blue_200, mdc_cyan_200, mdc_teal_200,  mdc_yellow_200, mdc_amber_200, mdc_orange_200, mdc_deep_orange_200, mdc_brown_200, mdc_grey_200, mdc_blue_grey_200];
const colorsNoGreenArray_300=[mdc_red_300, mdc_pink_300, mdc_purple_300, mdc_deep_purple_300, mdc_indigo_300, mdc_blue_300, mdc_light_blue_300, mdc_cyan_300, mdc_teal_300,  mdc_yellow_300, mdc_amber_300, mdc_orange_300, mdc_deep_orange_300, mdc_brown_300, mdc_grey_300, mdc_blue_grey_300];
const colorsNoGreenArray_400=[mdc_red_400, mdc_pink_400, mdc_purple_400, mdc_deep_purple_400, mdc_indigo_400, mdc_blue_400, mdc_light_blue_400, mdc_cyan_400, mdc_teal_400,  mdc_yellow_400, mdc_amber_400, mdc_orange_400, mdc_deep_orange_400, mdc_brown_400, mdc_grey_400, mdc_blue_grey_400];
const colorsNoGreenArray_500=[mdc_red_500, mdc_pink_500, mdc_purple_500, mdc_deep_purple_500, mdc_indigo_500, mdc_blue_500, mdc_light_blue_500, mdc_cyan_500, mdc_teal_500,  mdc_yellow_500, mdc_amber_500, mdc_orange_500, mdc_deep_orange_500, mdc_brown_500, mdc_grey_500, mdc_blue_grey_500];
const colorsNoGreenArray_600=[mdc_red_600, mdc_pink_600, mdc_purple_600, mdc_deep_purple_600, mdc_indigo_600, mdc_blue_600, mdc_light_blue_600, mdc_cyan_600, mdc_teal_600,  mdc_yellow_600, mdc_amber_600, mdc_orange_600, mdc_deep_orange_600, mdc_brown_600, mdc_grey_600, mdc_blue_grey_600];
const colorsNoGreenArray_700=[mdc_red_700, mdc_pink_700, mdc_purple_700, mdc_deep_purple_700, mdc_indigo_700, mdc_blue_700, mdc_light_blue_700, mdc_cyan_700, mdc_teal_700,  mdc_yellow_700, mdc_amber_700, mdc_orange_700, mdc_deep_orange_700, mdc_brown_700, mdc_grey_700, mdc_blue_grey_700];
const colorsNoGreenArray_800=[mdc_red_800, mdc_pink_800, mdc_purple_800, mdc_deep_purple_800, mdc_indigo_800, mdc_blue_800, mdc_light_blue_800, mdc_cyan_800, mdc_teal_800,  mdc_yellow_800, mdc_amber_800, mdc_orange_800, mdc_deep_orange_800, mdc_brown_800, mdc_grey_800, mdc_blue_grey_800];
const colorsNoGreenArray_900=[mdc_red_900, mdc_pink_900, mdc_purple_900, mdc_deep_purple_900, mdc_indigo_900, mdc_blue_900, mdc_light_blue_900, mdc_cyan_900, mdc_teal_900,  mdc_yellow_900, mdc_amber_900, mdc_orange_900, mdc_deep_orange_900, mdc_brown_900, mdc_grey_900, mdc_blue_grey_900];
const colorsNoGreenArray_A100=[mdc_red_A100, mdc_pink_A100, mdc_purple_A100, mdc_deep_purple_A100, mdc_indigo_A100, mdc_blue_A100, mdc_light_blue_A100, mdc_cyan_A100, mdc_teal_A100,  mdc_yellow_A100, mdc_amber_A100, mdc_orange_A100, mdc_deep_orange_A100];
const colorsNoGreenArray_A200=[mdc_red_A200, mdc_pink_A200, mdc_purple_A200, mdc_deep_purple_A200, mdc_indigo_A200, mdc_blue_A200, mdc_light_blue_A200, mdc_cyan_A200, mdc_teal_A200,  mdc_yellow_A200, mdc_amber_A200, mdc_orange_A200, mdc_deep_orange_A200];
const colorsNoGreenArray_A400=[mdc_red_A400, mdc_pink_A400, mdc_purple_A400, mdc_deep_purple_A400, mdc_indigo_A400, mdc_blue_A400, mdc_light_blue_A400, mdc_cyan_A400, mdc_teal_A400,  mdc_yellow_A400, mdc_amber_A400, mdc_orange_A400, mdc_deep_orange_A400];
const colorsNoGreenArray_A700=[mdc_red_A700, mdc_pink_A700, mdc_purple_A700, mdc_deep_purple_A700, mdc_indigo_A700, mdc_blue_A700, mdc_light_blue_A700, mdc_cyan_A700, mdc_teal_A700,  mdc_yellow_A700, mdc_amber_A700, mdc_orange_A700, mdc_deep_orange_A700];


const mixedNoRedColors=colorsNoRedArray_600.concat(colorsNoRedArray_A700.concat(colorsNoRedArray_900.concat(colorsNoRedArray_300)));
shuffleArray(mixedNoRedColors);

const mixedNoGreenColors=colorsNoGreenArray_600.concat(colorsNoGreenArray_A700.concat(colorsNoGreenArray_900.concat(colorsNoGreenArray_300)));
shuffleArray(mixedNoGreenColors);
//mdc_grey_600