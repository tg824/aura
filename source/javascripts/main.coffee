$ ->
  $('.pop').each (i,e)->
    source = $(@)
    content = $($(@).data('source')).html()
    source.data('content', content)

  $('.pop').on 'mouseenter', (e)->
    $('.pop').not(@).popover('destroy')
    opts =
      html: true
      animation:true
    # Override popover placement if we're in responsive mode
    opts.placement = 'top' if $('.row').width()<768;
    $(@).popover(opts).popover('show')

  $('.pop').on 'mouseleave', (e)->
    $(@).popover('destroy')
