import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  menuList: Menu[] = [];
  x : number = 0;
  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    let menu: Menu = {
      name: 'Program Overview',
      path: 'home',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Register for a Program',
      path: 'register',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Outreach',
      path: 'outreach',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Careers',
      path: 'careers',
      isSelected: false
    };
    this.menuList.push(menu);
    menu = {
      name: 'Stem Socials',
      path: 'stem-socials',
      isSelected: false
    };
    this.menuList.push(menu);

    // select the active menu
    setTimeout(() => {
      let activePath = this.router.url;
      const pathList: string[] = activePath.split(`/`);

      if (pathList && pathList.length > 1) {
        activePath = pathList[1];
        const index = this.menuList.findIndex(d => d.path === activePath);
        if (index > -1) {
          this.menuList[index].isSelected = true;
        }
      }
    }, 1500);
  }

  menuSelected(index: number) {
    this.menuList.forEach(d => d.isSelected = false);
    this.menuList[index].isSelected = true;
    this.router.navigateByUrl(this.menuList[index].path);
  }
 
  @ViewChild('menu') menulist:ElementRef;
  toggleFunction(){
    //this.menulist.nativeElement.classList.add('show');
    if(this.x == 0){
      this.renderer.addClass(this.menulist.nativeElement, 'show');
      console.log(this.x);
      this.x = 1;
    }else{
      this.renderer.removeClass(this.menulist.nativeElement, 'show');
      console.log(this.x);
      this.x = 0;
    }

  }

  @ViewChild('menu') menu:ElementRef;
  showMenu() {
    console.log("test");
    if(this.menu.nativeElement.style.display == "flex") {
      this.menu.nativeElement.style.display = 'flex';
      this.menu.nativeElement.style.display = 'none';
    } else {
      this.menu.nativeElement.style.display = 'none';
      this.menu.nativeElement.style.flexDirection= 'column';
      this.menu.nativeElement.style.position = 'absolute';
      this.menu.nativeElement.style.right = '0';
      this.menu.nativeElement.style.backgroundColor= '#ffffff';
      this.menu.nativeElement.style.flex = '0';
      this.menu.nativeElement.style.width = '75%';
      this.menu.nativeElement.style.display = 'flex';
    }
  }

}
