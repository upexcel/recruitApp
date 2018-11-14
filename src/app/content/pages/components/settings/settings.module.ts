import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from "@angular/material/icon";
import { SettingsComponent } from './settings.component';
import { ImapServerComponent } from './imap-server/imap-server.component';
import { MatCardModule } from '@angular/material/card';
import { ImapComponentFormComponent } from './imap-component-form/imap-component-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SmtpServerComponent } from './smtp-server/smtp-server.component'
import { SmtpComponentFormComponent } from './smtp-component-form/smtp-component-form.component';
import { MatRadioModule } from '@angular/material/radio';
import { SlackInfoComponent } from './slack-info/slack-info.component';
import { SlackComponentFormComponent } from './slack-component-form/slack-component-form.component';
import { EmailTemplatesComponent } from './email-templates/email-templates.component'
@NgModule({
	imports: [
		CommonModule,
		MatIconModule,
		MatCardModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatInputModule,
		MatRadioModule,
		MatButtonModule,
		RouterModule.forChild([
			{
				path: '',
				component: SettingsComponent,
				children: [
					{
						path: 'imap',
						component: ImapServerComponent
					}, {
						path: 'smtp',
						component: SmtpServerComponent
					}, {
						path: 'slackInfo',
						component: SlackInfoComponent
					}, {
						path: 'emailTemplate',
						component: EmailTemplatesComponent
					}
				]
			}
		])
	],
	providers: [],
	declarations: [
		ImapComponentFormComponent,
		SettingsComponent,
		ImapServerComponent,
		SmtpServerComponent,
		SmtpComponentFormComponent,
		SlackInfoComponent,
		SlackComponentFormComponent,
		EmailTemplatesComponent
	]
})
export class SettingsModule { }
