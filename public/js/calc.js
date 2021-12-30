/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
/* eslint-disable no/-tabs */

let niu_rou_mian = 0;
let da_lu_mian = 0;
let hun_tun_mian = 0;
let za_jiang_mian = 0;
let lu_rou_fan = 0;
let pai_gu_fan = 0;
let ji_tui_fan = 0;
function calc() {
    document.getElementById("subtotal").removeAttribute("hidden");
    if (document.getElementById("niu_rou_mian").checked) {
        const count = parseInt(select.options[document.getElementById("niu_rou_mian_count").selectedIndex].value);
        document.write("牛肉麵 * " + count);
        niu_rou_mian = 90 * count;
    }
    if (document.getElementById("da_lu_mian").checked) {
        const count = parseInt(select.options[document.getElementById("da_lu_mian_count").selectedIndex].value);
        document.write("大滷麵 * " + count);
        da_lu_mian = 60 * count;
    }
    if (document.getElementById("hun_tun_mian").checked) {
        const count = parseInt(select.options[document.getElementById("hun_tun_mian_count").selectedIndex].value);
        document.write("餛飩麵 * " + count);
        hun_tun_mian = 70 * count;
    }
    if (document.getElementById("za_jiang_mian").checked) {
        const count = parseInt(select.options[document.getElementById("za_jiang_mian_count").selectedIndex].value);
        document.write("雜醬麵 * " + count);
        za_jiang_mian = 50 * count;
    }
    if (document.getElementById("lu_rou_fan").checked) {
        const count = parseInt(select.options[document.getElementById("lu_rou_fan_count").selectedIndex].value);
        document.write("滷肉飯 * " + count);
        lu_rou_fan = 40 * count;
    }
    if (document.getElementById("pai_gu_fan").checked) {
        const count = parseInt(select.options[document.getElementById("pai_gu_fan_count").selectedIndex].value);
        document.write("排骨飯 * " + count);
        pai_gu_fan = 80 * count;
    }
    if (document.getElementById("ji_tui_fan").checked) {
        const count = parseInt(select.options[document.getElementById("ji_tui_fan_count").selectedIndex].value);
        document.write("雞腿飯 * " + count);
        ji_tui_fan = 100 * count;
    }
    document.writeln("</p>")
    const total = niu_rou_mian + da_lu_mian + hun_tun_mian + za_jiang_mian + lu_rou_fan + pai_gu_fan + ji_tui_fan;
    document.getElementById("total").removeAttribute("hidden");
}
