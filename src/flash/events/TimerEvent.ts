/**
 * Copyright 2014 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Class: TimerEvent
module Shumway.AVM2.AS.flash.events {
  import notImplemented = Shumway.Debug.notImplemented;
  import dummyConstructor = Shumway.Debug.dummyConstructor;
  export class TimerEvent extends flash.events.Event {

    static classInitializer: any = null;
    static initializer: any = null;

    static classSymbols: string [] = null;
    static instanceSymbols: string [] = null;

    constructor(type: string, bubbles?: boolean, cancelable?: boolean) {
      super(undefined, undefined, undefined);
      dummyConstructor("public flash.events.TimerEvent");
    }

    // JS -> AS Bindings
    static TIMER: string = "timer";
    static TIMER_COMPLETE: string = "timerComplete";

    clone(): Event {
      return new events.TimerEvent(this.type, this.bubbles, this.cancelable);
    }

    toString(): string {
      return this.formatToString('TimerEvent', 'type', 'bubbles', 'cancelable', 'eventPhase');
    }

    updateAfterEvent(): void {
      Shumway.AVM2.Runtime.AVM2.instance.globals['Shumway.Player.Utils'].requestRendering();
    }
  }
}
