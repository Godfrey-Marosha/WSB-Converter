import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { AlertModule } from './alert/alert.module';
import { MockBackendServerInterceptor } from '../shared/service/interceptor/mock-backend-server.interceptor';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [HeaderComponent],
    imports: [CommonModule, AlertModule, AppRoutingModule, MatButtonModule, TranslateModule],
    exports: [HeaderComponent, AlertModule, AppRoutingModule],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: MockBackendServerInterceptor,
            multi: true,
        },
    ],
})
export class CoreModule {}
