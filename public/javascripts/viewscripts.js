function toggleDescription(element) {
    let arrowIcon = element.getElementsByClassName('item-icon-wrapper')[0].firstElementChild
    let description = element.parentElement.parentElement.getElementsByClassName('item-desc')[0]

    if (description.className == "item-desc") {
        description.className += " hidden"
        arrowIcon.className = "fa fa-angle-right"
    } else {
        description.className = "item-desc"
        arrowIcon.className += " rotated"
    }
}

function toggleDropdown(element) {
    let dropdown = element.getElementsByClassName('item-dropdown')[0]

    if (dropdown.className == "item-dropdown hidden") {
        dropdown.className = "item-dropdown"
    } else {
        dropdown.className += " hidden"
    }
}