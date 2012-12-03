$ ->
  $(window).smartresize (e)->
    initPopovers()


  initPopovers = ()->
    rw = $('.row').width()
    $('.pop').each (i,e)->
      source = $(@)
      content = $($(@).data('source')).html()
      source.data('content', content)
      # Override popover placement if we're in responsive mode
      source.data('placement','bottom') if rw<768;

  $('.pop').on 'mouseenter', (e)->
    $('.pop').not(@).popover('destroy')
    opts =
      html: true
      animation:true
    $(@).popover(opts).popover('show')

  $('.pop').on 'mouseleave', (e)->
    $(@).popover('destroy')

  initPopovers()
