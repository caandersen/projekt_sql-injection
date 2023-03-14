import {data_lookup} from "../index";

document.getElementById("submit").addEventListener("click", user_submission)

function user_submission() {
    var input_1;
    var input_2;

    input_1 = document.getElementById("username").value;
    input_2 = document.getElementById("password").value;

    login_output(db_lookup(input_1, input_2));
};

function db_lookup(i1, i2) {
    var bool = false;

    bool = data_lookup(i1, i2) >= 1;

    return bool;
};

function login_output(bool) {
    var output_text;
    console.log(bool)
    if (bool === 1) {
        output_text = "Login successful";
        console.log(1);
    } else if (bool === false) {
        output_text = "Username and Password don't match";
        console.log(2);
    };
    alert(output_text);

    document.getElementById('output').innerHTML = output_text;
};