const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let countChecked = 0;
let lastChecked;

function handleClick(e) {
    let inBetween = false;
    countChecked++;
    if (this.checked && e.shiftKey) {
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                (console.log('==================='));
            }

            if (inBetween && countChecked > 1) checkbox.checked = true;
        })


    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', handleClick);
})
