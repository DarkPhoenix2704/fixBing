import { allComponents, provideFluentDesignSystem } from './web-components.min.js';

provideFluentDesignSystem().register(allComponents);

const toggleSwitch = document.getElementById('toggleSwitch');

chrome.storage.local.get(['bingFix'], (data) => {
    toggleSwitch.checked = data.bingFix;
});

toggleSwitch.addEventListener('click', (event) => {
    chrome.storage.local.set({'bingFix': event.target.checked}, () => {
        console.log('Value is set to ' + event.target.checked);
    })
});