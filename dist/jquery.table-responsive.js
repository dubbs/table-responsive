(function ($) {

  var tableResponsiveUpdate = function ($tableContainer) {

    // Collect wrappers
    var $tableWrapperScrollable = $tableContainer.find('.table-responsive-wrapper--scrollable');
    var $tableWrapperFixed = $tableContainer.find('.table-responsive-wrapper--fixed');

    // Set first column width on fixed
    var width = $tableWrapperScrollable.find('thead th:first').outerWidth();
    $tableWrapperFixed.css({maxWidth: width });

    // Show fixed so we get accurate width
    $tableWrapperFixed.show();

    // Read widths
    var widthScrollable = $tableWrapperScrollable.find('table').outerWidth();
    var widthFixed = $tableWrapperFixed.find('table').outerWidth();

    // Turn off fixed if scrollable area has enough room to breathe
    if (widthFixed < widthScrollable) {
      $tableContainer.removeClass('active');
      $tableWrapperFixed.hide();
    } else {
      $tableContainer.addClass('active');
    }
  }

  var tableResponsiveCreate = function ($tableOriginal) {
    var $tableWrapperScrollable = $('<div class="table-responsive-wrapper--scrollable"></div>').append($tableOriginal.clone());
    var $tableWrapperFixed = $('<div class="table-responsive-wrapper--fixed"></div>').append($tableOriginal.clone());
    var $tableResponsive = $('<div class="table-responsive"></div>').append([$tableWrapperScrollable, $tableWrapperFixed]);
    $tableOriginal.replaceWith($tableResponsive);
    tableResponsiveUpdate($tableResponsive);
  }

  window.tableResponsiveUpdate = tableResponsiveUpdate;
  window.tableResponsiveCreate = tableResponsiveCreate;

})(jQuery);
