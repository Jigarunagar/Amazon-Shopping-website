import { amazonHeader } from './script.js';
document.getElementById("headercontainer").innerHTML = amazonHeader;
import { footerhtml } from './script.js';
document.getElementById("footersection").innerHTML = footerhtml;
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'styles.css'; // Path to your external CSS file
document.head.appendChild(link);