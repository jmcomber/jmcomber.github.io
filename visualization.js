function export_pdf(game_id){
  // var form_data = {'svg': $('#visualization_svg').prop('outerHTML'),
  //                  'latex': $('#latex_svg').prop('outerHTML'),
  //                  'csrfmiddlewaretoken': Cookies.get('csrftoken')};
  $('#svg_field').val($('#visualization_svg').prop('outerHTML'));
  // $('#latex_svg_field').val($('#latex_svg').prop('outerHTML'));
  $('#export_form')[0].submit();
  // // $.ajax({
  // //   type: 'POST',
  // //   url: '/export/',
  // //   data: form_data,
  // //   dataType: 'json',
  // //   success: function(data){
  // //     console.log(data);
  // //   },
  // //   error: function(data){
  // //     console.log('error 500');
  // //   },
  // //   complete: function(data){
  // //     console.log('completed');
  // //   }
  // // });
  // return false
}