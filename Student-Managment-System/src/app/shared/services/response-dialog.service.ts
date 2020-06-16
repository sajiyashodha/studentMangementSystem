import { ResponseObject } from './../models/ResponseObject';
import { NzModalService } from 'ng-zorro-antd';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponseDialogService {

  constructor(
    private nzModalService: NzModalService

  ) { }
  showForResponseObject(responseObj: ResponseObject) {
    // console.log("Show Message Service............");
    // this.currentMsg.next(responseObj);
    if (responseObj.statusCode === 200) {
      // OK
      this.nzModalService.success({
        nzTitle: 'Success',
        nzContent: responseObj.displayMessage,
      });


    } else if (responseObj.statusCode === 400) {
      // Bad Request
      this.nzModalService.warning({
        nzTitle: 'Bad Request',
        nzContent: responseObj.displayMessage
      });


    } else if (responseObj.statusCode === 500) {
      // Internal Server Error
      this.nzModalService.error({
        nzTitle: 'Internal Server Error',
        nzContent: responseObj.displayMessage

      });


    } else if (responseObj.statusCode === 416) {

      this.nzModalService.warning({
        nzTitle: 'Warning',
        nzContent: responseObj.displayMessage
      });

    } else {

      this.nzModalService.info({
        nzTitle: 'Response',
        nzContent: responseObj.displayMessage
      });

    }
  }
  showStringResponse(content: string, type: string) {

    if (type === 'error') {
      this.nzModalService.error({
        nzTitle: 'Error',
        nzContent: content,
      });
    }

    if (type === 'info') {
      this.nzModalService.info({
        nzTitle: 'Information',
        nzContent: content,
      });
    }

    if (type === 'success') {
      this.nzModalService.success({
        nzTitle: 'Success',
        nzContent: content,
      });
    }

    if (type === 'warning') {
      this.nzModalService.warning({
        nzTitle: 'Warning',
        nzContent: content,
      });
    }

  }

}

