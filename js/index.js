function showPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function hidePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

function togglePopup(id) {
    const popup = document.getElementById(id);
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

function addPopupListeners(popupId, closeBtnClass, okBtnClass) {

    document
        .querySelector(`button[class='${closeBtnClass}']`)
        .addEventListener("click", function() {
            hidePopup(popupId);
        });

    document
        .querySelector(`button[class='${okBtnClass}']`)
        .addEventListener("click", function() {
            hidePopup(popupId);
        });
}

document.addEventListener("DOMContentLoaded", function() {
    addPopupListeners("PopUpLyn", "LynClose", "LynOK");
    addPopupListeners("PopUpSinna", "SinnaClose", "SinnaOK");
    addPopupListeners("PopUpNetwork", "NetworkClose", "NetworkOK");
    addPopupListeners("PopUpGloom", "GloomClose", "GloomOK");
    addPopupListeners("PopUpProphecy", "ProphecyClose", "ProphecyOK");
    addPopupListeners("PopUpTundra", "TundraClose", "TundraOK");
});

let date = new Date();

setInterval(function() {
    document.querySelector('.time').innerText = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    });
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    let audio = document.getElementById("audio");
    let range = document.getElementById("range26");
    range.addEventListener("input", function() {
        audio.volume = range.value / 50;
    });
});

if (window.matchMedia("(max-width: 767px)").matches) {
    console.log("This is a mobile device, the code will not run");
} else {

}

document.addEventListener("DOMContentLoaded", function() {
    $(document).ready(function() {
        $('.window-action-button.main').click(function() {
            try {
                const audio = $('#audio')[0];

                $('#enter').hide();
                $('#main').show();

                audio.play();
            } catch (error) {
                console.error("Error while trying to play audio:", error);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.getElementById("mobile-notice").innerHTML = "(View on PC for a better experience)";
    }
});