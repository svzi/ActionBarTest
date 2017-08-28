import { StackLayout } from 'ui/layouts/stack-layout';
import { NavigatedData, Page } from 'ui/page';
import { RadSideDrawer } from 'nativescript-telerik-ui/sidedrawer';

import { HomeViewModel } from './home-view-model';

let page: Page;
let drawer: RadSideDrawer;

/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
export function onNavigatingTo(args: NavigatedData) {
    page = <Page>args.object;
    page.bindingContext = new HomeViewModel();
    drawer = page.getViewById('sideDrawer');
    console.log('onNavigatingTo(), drawer: ' + drawer);
}

export function toggleDrawer() {
    drawer.toggleDrawerState();
};


export function toggleActionBar() {
    const hidden: boolean = !page.actionBarHidden 
    page.actionBarHidden = hidden;
    console.log('toggleActionBar(), page.actionBarHidden: ' + page.actionBarHidden);

    /*drawer.showOverNavigation = !hidden;
    console.log('toggleActionBar(), drawer.showOverNavigation: ' + drawer.showOverNavigation);*/
}