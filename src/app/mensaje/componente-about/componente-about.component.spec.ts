import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteAboutComponent } from './componente-about.component';

describe('ComponenteAboutComponent', () => {
  let component: ComponenteAboutComponent;
  let fixture: ComponentFixture<ComponenteAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
