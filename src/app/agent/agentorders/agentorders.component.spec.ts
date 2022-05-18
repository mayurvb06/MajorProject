import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentordersComponent } from './agentorders.component';

describe('AgentordersComponent', () => {
  let component: AgentordersComponent;
  let fixture: ComponentFixture<AgentordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
