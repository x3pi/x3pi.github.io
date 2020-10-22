// There isn't a standard way to get line numbers reliably, we attempt to
// parse out a few formats we have seen.
// Note we do not use e.lineNumber as it is not reliable (especially in the
// context of eval)
'use strict';
function getLineNumber(error) {
  try {
    // firefox
    const firefoxRegex = /eval:(\d+):\d+/;
    if (error.stack.match(firefoxRegex)) {
      const res = error.stack.match(firefoxRegex);
      return parseInt(res[1], 10);
    }

    // chrome
    const chromeRegex = /eval.+:(\d+):\d+/;
    if (error.stack.match(chromeRegex)) {
      const res = error.stack.match(chromeRegex);
      return parseInt(res[1], 10);
    }

  } catch (e) {
    return;
  }

  // We found nothing
  return;
}

async function executeCodeSnippet(consoleLogElement, codeSnippet) {
  consoleLogElement.innerText = '';
  var oldLog = console.log;
  console.log = function(...values) {
    let logStrs = [];
    for (let i = 0; i < values.length; i++) {
      const value = values[i];

      let logStr;
      if (value.toString == null) {
        logStr = value;
      } else {
        const toStr = value.toString();

        if (toStr === '[object Object]') {
          logStr = JSON.stringify(value, null, 2);
        } else {
          logStr = toStr;
        }
        logStrs.push(logStr);
      }
    }
    consoleLogElement.innerHTML += logStrs.join(' ') + '\n';
  };

  function reportError(e) {
    var errorMessage = '\n<div class="snippet-error"><em>An error occured';
    var lineNumber = getLineNumber(e);
    if (lineNumber !== undefined) {
      errorMessage += ' on line: ' + lineNumber + '</em>';
    } else {
      errorMessage += '</em>'
    }
    errorMessage += '<br/>';
    errorMessage += '<div class="snippet-error-msg">' + e.message + '</div>';
    errorMessage += '</div>';

    console.log(errorMessage);
  }

  // It is important that codeSnippet and 'try {' be on the same line
  // in order to not modify the line number on an error.
  const evalString = '(async function runner() { try { ' + codeSnippet +
      '} catch (e) { reportError(e); } })()';
/*
  if (window._tfengine && window._tfengine.startScope) {
    window._tfengine.startScope();
  } else {
    tf.ENV.engine.startScope()
  }
*/
  // this outer try is for errors that prevent the snippet from being parsed.
  try {
    await eval(evalString).catch(function(e) {
      // This catch is for errors within promises within snippets
      reportError(e);
    });
  } catch (e) {
    reportError(e);
  }


  console.log = oldLog;
};



function initCodeBlocks(selector) {
  // Find all the code blocks.
  var jsEd =  Array.prototype.slice.call(document.querySelectorAll(".code"))
  console.log(jsEd);
  var editors = []
  jsEd.forEach(function(code){
    console.log(code);
	  var editor = CodeMirror.fromTextArea(code, {
        lineNumbers: true,
        viewportMargin: Infinity
      });
	  editors.push(editor)
  })
  
  
  
  var jsBlocks =
      Array.prototype.slice.call(document.querySelectorAll(selector));
  jsBlocks.forEach(function(block, i) {
    var consoleElement = document.createElement('div');
    consoleElement.className = 'snippet-console';

    var consoleRunElement = document.createElement('button');
    consoleRunElement.innerText = 'Run';
    consoleRunElement.className = 'snippet-run-button';

    var consoleLogElement = document.createElement('div');
    consoleLogElement.className = 'snippet-console-log';

    consoleElement.appendChild(consoleLogElement);
    consoleElement.appendChild(consoleRunElement);

    block.parentElement.insertAdjacentElement('afterend', consoleElement);

    consoleRunElement.addEventListener('click', function() {
      var consoleLogElement =
          this.parentElement.querySelector('.snippet-console-log');

      var snippetText;
	  console.log(editors[i].getValue())
      if (editors[i]) {
        snippetText = editors[i].getValue();
      } else {
        snippetText = this.parentElement.previousElementSibling.innerText;
      }

      executeCodeSnippet(consoleLogElement, snippetText);
    });

  });
}


document.addEventListener('DOMContentLoaded', function (e) {
  if (typeof initCodeBlocks !== 'undefined') {
    initCodeBlocks('.CodeMirror');
  }
});