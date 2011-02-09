

(function() {

  // create tab group
  var tabGroup = Titanium.UI.createTabGroup({id:'tabGroup1'});

  tabGroup.addTab(Titanium.UI.createTab({
    icon: 'images/tabs/schedule.png',
    title: 'Schedule',
    window: DrupalCon.ui.createDayWindow(tabGroup)
  }));

  tabGroup.addTab(Titanium.UI.createTab({
    icon: 'images/tabs/maps.png',
    title: 'Maps',
    window: DrupalCon.ui.createMapWindow(tabGroup)
  }));

  tabGroup.addTab(Titanium.UI.createTab({
      icon: 'images/tabs/news.png',
      title: 'News',
      window: DrupalCon.ui.createTwitterWindow(tabGroup)
  }));

  
// Implement starred later
//  tabGroup.addTab(Titanium.UI.createTab({
//      icon: 'images/tabs/star.png',
//      title: 'Starred',
//      window: DrupalCon.ui.createStarredWindow(tabGroup)
//  }));

  tabGroup.addTab(Titanium.UI.createTab({
      icon: 'images/tabs/bofs.png',
      title: 'Presenters',
      window: DrupalCon.ui.createPresentersWindow(tabGroup)
  }));

  tabGroup.addEventListener('open',function() {
    // set background color back to white after tab group transition
    Titanium.UI.setBackgroundColor('#fff');
  });

  // Display the tab group, thus kicking off the application.
  tabGroup.setActiveTab(0);
  // open tab group with a transition animation
  tabGroup.open({
    transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
  });

  // tab group close event
  tabGroup.addEventListener('close', function(e) {

  });

  // tab group open event
  tabGroup.addEventListener('open', function(e) {

  });

  Ti.addEventListener('drupal:entity:datastore:update_completed', function(e) {
    Drupal.createNoticeDialog('Update completed.').show(3000);
    Ti.API.info('Update completed.');
  });

  Ti.addEventListener('drupalcon:update_data', function(e) {
    Drupal.createNoticeDialog('Updating session and presenter data.').show(3000);
    Drupal.entity.db('main', 'node').fetchUpdates('session');
    Drupal.entity.db('main', 'user').fetchUpdates('user');
  });

})();
