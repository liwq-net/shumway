/**
 * Copyright 2013 Mozilla Foundation
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
// Class: Program3D
module Shumway.AVM2.AS.flash.display3D {
  import notImplemented = Shumway.Debug.notImplemented;
  export class Program3D extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor () {
      false && super();
      notImplemented("Dummy Constructor: public flash.display3D.Program3D");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    upload(vertexProgram: flash.utils.ByteArray, fragmentProgram: flash.utils.ByteArray): void {
      vertexProgram = vertexProgram; fragmentProgram = fragmentProgram;
      notImplemented("public flash.display3D.Program3D::upload"); return;
    }
    dispose(): void {
      notImplemented("public flash.display3D.Program3D::dispose"); return;
    }
  }
}
