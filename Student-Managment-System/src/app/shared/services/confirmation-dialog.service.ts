import { Injectable, Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { NzModalService, NzModalRef } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {

  constructor(private modalService: NzModalService) { }

  openConfirm(title: string, content: string, buttonType: string, icon: string): Observable<boolean> {

    const modal: NzModalRef = this.modalService.create({
      nzTitle: title,
      nzContent: NzModalCustomComponent,
      nzComponentParams: {
        contentText: content,
        iconType: icon
      },
      nzFooter: [
        {
          label: 'Yes',
          type: buttonType,
          onClick: () => { modal.destroy(true); }
        },
        {
          label: 'No',
          shape: 'default',
          onClick: () => { modal.destroy(false); }
        },
      ],
      nzMaskClosable: false
    });
    return modal.afterClose
  };
}

@Component({
  selector: 'nz-modal-custom-component',
  template: `
    <div>
      <div class="ant-notification-notice-content">
        <div class="ant-notification-notice-with-icon">
            <span class="ant-notification-notice-icon">
                <i nz-icon style="padding-right: 5px;" [nzType]="iconType" nzTheme="outline"></i>
            </span>
            <div class="ant-notification-notice-message">{{contentText}}</div>
        </div>
      </div>
    </div>
  `
})
export class NzModalCustomComponent {
  @Input() contentText: string;
  @Input() iconType: string;

}