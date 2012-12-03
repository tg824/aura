$ ->
  $('.pop').each (i,e)->
    source = $(@)
    content = $($(@).data('source')).html()
    source.data('content', content)

  $('.pop').on 'mouseenter', (e)->
    $('.pop').not(@).popover('destroy')
    $(@).popover({html: true, animation:true}).popover('show')

  $('.pop').on 'mouseleave', (e)->
    $(@).popover('destroy')
