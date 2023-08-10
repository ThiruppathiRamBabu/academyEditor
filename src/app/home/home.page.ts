import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ContentChange, QuillEditorComponent } from 'ngx-quill';
import { DisplayPage } from '../display/display.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {
  @ViewChild(QuillEditorComponent) editor!: QuillEditorComponent;
  mytext = null;
  constructor(private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  async preview() {
    const modal = await this.modalCtrl.create({
      component: DisplayPage,
      componentProps: { data: this.mytext }
    });
    await modal.present();
  }
  clearEditor() {
    this.editor.quillEditor.setText('');
  }
  ngAfterViewInit(): void {
    this.editor.onContentChanged.subscribe(async (change: ContentChange) => {
      console.log('change', change)

      const changed = change.content.ops.pop();
      if (changed.insert.indexOf('ionic') >= 0) {
        const toast = await this.toastCtrl.create({
          message: 'You Called me?',
          duration: 2000,
        });
        toast.present();
      }
    })
  } 

}
