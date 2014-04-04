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
// Class: FileReferenceList
module Shumway.AVM2.AS.flash.net {
  import notImplemented = Shumway.Debug.notImplemented;
  export class FileReferenceList extends flash.events.EventDispatcher {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor () {
      false && super(undefined);
      notImplemented("Dummy Constructor: public flash.net.FileReferenceList");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    
    // _fileList: any [];
    get fileList(): any [] {
      notImplemented("public flash.net.FileReferenceList::get fileList"); return;
      // return this._fileList;
    }
    browse(typeFilter: any [] = null): boolean {
      typeFilter = typeFilter;
      notImplemented("public flash.net.FileReferenceList::browse"); return;
    }
  }
}
