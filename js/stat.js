'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeight = 150;
  var step = histogramHeight / max;

  var barWidth = 40;
  var indent = 50;
  var initialX = 140;
  var initialY = 90;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + (Math.random() * (1.0 - 0.3) + 0.3) + ')';
    }
    ctx.fillRect(initialX + (barWidth + indent) * i, initialY + histogramHeight - times[i] * step, barWidth, times[i] * step);

    ctx.fillStyle = '#000000';
    ctx.fillText(times[i].toFixed(0), initialX + (barWidth + indent) * i, initialY + histogramHeight - times[i] * step - 10);
    ctx.fillText(names[i], initialX + (barWidth + indent) * i, initialY + histogramHeight + 20);
  }
}
