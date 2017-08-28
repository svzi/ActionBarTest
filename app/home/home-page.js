"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = require("./home-view-model");
var page;
var drawer;
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize the page binding context.
*************************************************************/
function onNavigatingTo(args) {
    page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
    drawer = page.getViewById('sideDrawer');
    console.log('onNavigatingTo(), drawer: ' + drawer);
}
exports.onNavigatingTo = onNavigatingTo;
function toggleDrawer() {
    drawer.toggleDrawerState();
}
exports.toggleDrawer = toggleDrawer;
;
function toggleActionBar() {
    var hidden = !page.actionBarHidden;
    page.actionBarHidden = hidden;
    console.log('toggleActionBar(), page.actionBarHidden: ' + page.actionBarHidden);
    /*drawer.showOverNavigation = !hidden;
    console.log('toggleActionBar(), drawer.showOverNavigation: ' + drawer.showOverNavigation);*/
}
exports.toggleActionBar = toggleActionBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEscURBQWtEO0FBRWxELElBQUksSUFBVSxDQUFDO0FBQ2YsSUFBSSxNQUFxQixDQUFDO0FBRTFCOzs4REFFOEQ7QUFDOUQsd0JBQStCLElBQW1CO0lBQzlDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7SUFDMUMsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxNQUFNLENBQUMsQ0FBQztBQUN2RCxDQUFDO0FBTEQsd0NBS0M7QUFFRDtJQUNJLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0FBQy9CLENBQUM7QUFGRCxvQ0FFQztBQUFBLENBQUM7QUFHRjtJQUNJLElBQU0sTUFBTSxHQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVoRjtnR0FDNEY7QUFDaEcsQ0FBQztBQVBELDBDQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlcic7XG5cbmltcG9ydCB7IEhvbWVWaWV3TW9kZWwgfSBmcm9tICcuL2hvbWUtdmlldy1tb2RlbCc7XG5cbmxldCBwYWdlOiBQYWdlO1xubGV0IGRyYXdlcjogUmFkU2lkZURyYXdlcjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVXNlIHRoZSBcIm9uTmF2aWdhdGluZ1RvXCIgaGFuZGxlciB0byBpbml0aWFsaXplIHRoZSBwYWdlIGJpbmRpbmcgY29udGV4dC5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IEhvbWVWaWV3TW9kZWwoKTtcbiAgICBkcmF3ZXIgPSBwYWdlLmdldFZpZXdCeUlkKCdzaWRlRHJhd2VyJyk7XG4gICAgY29uc29sZS5sb2coJ29uTmF2aWdhdGluZ1RvKCksIGRyYXdlcjogJyArIGRyYXdlcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVEcmF3ZXIoKSB7XG4gICAgZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG59O1xuXG5cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBY3Rpb25CYXIoKSB7XG4gICAgY29uc3QgaGlkZGVuOiBib29sZWFuID0gIXBhZ2UuYWN0aW9uQmFySGlkZGVuIFxuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gaGlkZGVuO1xuICAgIGNvbnNvbGUubG9nKCd0b2dnbGVBY3Rpb25CYXIoKSwgcGFnZS5hY3Rpb25CYXJIaWRkZW46ICcgKyBwYWdlLmFjdGlvbkJhckhpZGRlbik7XG5cbiAgICAvKmRyYXdlci5zaG93T3Zlck5hdmlnYXRpb24gPSAhaGlkZGVuO1xuICAgIGNvbnNvbGUubG9nKCd0b2dnbGVBY3Rpb25CYXIoKSwgZHJhd2VyLnNob3dPdmVyTmF2aWdhdGlvbjogJyArIGRyYXdlci5zaG93T3Zlck5hdmlnYXRpb24pOyovXG59Il19