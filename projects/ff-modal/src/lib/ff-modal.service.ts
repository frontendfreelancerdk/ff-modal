import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
  TemplateRef
} from '@angular/core';
import {FFOverlayService} from 'ff-overlay';
import {FFModalComponent, FFModalOptions} from './ff-modal/ff-modal.component';

@Injectable({
  providedIn: 'root'
})
export class FFModalService {
  private modal: any;
  private renderer: Renderer2;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector,
              rendererFactory: RendererFactory2,
              private overlayService: FFOverlayService) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  private initComponent(component: any) {
    const componentRef = this.componentFactoryResolver
      .resolveComponentFactory(component)
      .create(this.injector);

    this.appRef.attachView(componentRef.hostView);

    this.modal = componentRef;
  }

  open(template: TemplateRef<any>, options: FFModalOptions = {}) {
    if (!this.modal) {
      this.initComponent(FFModalComponent);
    }
    this.modal.instance.content = template;
    this.modal.instance.options = options;
    this.modal.instance._doCheck();
    const domElem = (this.modal.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    this.overlayService.appendChild(domElem);
    this.modal.instance._afterHide.subscribe((val) => {
      if (val) {
        this._close();
      }
    });
  }

  setOptions(options: FFModalOptions) {
    if (this.modal) {
      this.modal.instance.options = options;
    }
  }

  private _close() {
    if (this.modal) {
      const domElem = (this.modal.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;
      this.overlayService.removeChild(domElem);
      this.modal = null;
    }
  }

  close() {
    if (this.modal && this.modal.instance) {
      this.modal.instance.close();
    }
  }
}
