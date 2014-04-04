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
// Class: NumberFormatter
module Shumway.AVM2.AS.flash.globalization {
  import notImplemented = Shumway.Debug.notImplemented;
  export class NumberFormatter extends ASNative {
    
    // Called whenever the class is initialized.
    static classInitializer: any = null;
    
    // Called whenever an instance of the class is initialized.
    static initializer: any = null;
    
    // List of static symbols to link.
    static staticBindings: string [] = null; // [];
    
    // List of instance symbols to link.
    static bindings: string [] = null; // [];
    
    constructor (requestedLocaleIDName: string) {
      requestedLocaleIDName = "" + requestedLocaleIDName;
      false && super();
      notImplemented("Dummy Constructor: public flash.globalization.NumberFormatter");
    }
    
    // JS -> AS Bindings
    
    
    // AS -> JS Bindings
    static getAvailableLocaleIDNames(): ASVector<any> {
      notImplemented("public flash.globalization.NumberFormatter::static getAvailableLocaleIDNames"); return;
    }
    
    // _lastOperationStatus: string;
    // _requestedLocaleIDName: string;
    // _actualLocaleIDName: string;
    // _fractionalDigits: number /*int*/;
    // _useGrouping: boolean;
    // _groupingPattern: string;
    // _digitsType: number /*uint*/;
    // _decimalSeparator: string;
    // _groupingSeparator: string;
    // _negativeSymbol: string;
    // _negativeNumberFormat: number /*uint*/;
    // _leadingZero: boolean;
    // _trailingZeros: boolean;
    get lastOperationStatus(): string {
      notImplemented("public flash.globalization.NumberFormatter::get lastOperationStatus"); return;
      // return this._lastOperationStatus;
    }
    get requestedLocaleIDName(): string {
      notImplemented("public flash.globalization.NumberFormatter::get requestedLocaleIDName"); return;
      // return this._requestedLocaleIDName;
    }
    get actualLocaleIDName(): string {
      notImplemented("public flash.globalization.NumberFormatter::get actualLocaleIDName"); return;
      // return this._actualLocaleIDName;
    }
    get fractionalDigits(): number /*int*/ {
      notImplemented("public flash.globalization.NumberFormatter::get fractionalDigits"); return;
      // return this._fractionalDigits;
    }
    set fractionalDigits(value: number /*int*/) {
      value = value | 0;
      notImplemented("public flash.globalization.NumberFormatter::set fractionalDigits"); return;
      // this._fractionalDigits = value;
    }
    get useGrouping(): boolean {
      notImplemented("public flash.globalization.NumberFormatter::get useGrouping"); return;
      // return this._useGrouping;
    }
    set useGrouping(value: boolean) {
      value = !!value;
      notImplemented("public flash.globalization.NumberFormatter::set useGrouping"); return;
      // this._useGrouping = value;
    }
    get groupingPattern(): string {
      notImplemented("public flash.globalization.NumberFormatter::get groupingPattern"); return;
      // return this._groupingPattern;
    }
    set groupingPattern(value: string) {
      value = "" + value;
      notImplemented("public flash.globalization.NumberFormatter::set groupingPattern"); return;
      // this._groupingPattern = value;
    }
    get digitsType(): number /*uint*/ {
      notImplemented("public flash.globalization.NumberFormatter::get digitsType"); return;
      // return this._digitsType;
    }
    set digitsType(value: number /*uint*/) {
      value = value >>> 0;
      notImplemented("public flash.globalization.NumberFormatter::set digitsType"); return;
      // this._digitsType = value;
    }
    get decimalSeparator(): string {
      notImplemented("public flash.globalization.NumberFormatter::get decimalSeparator"); return;
      // return this._decimalSeparator;
    }
    set decimalSeparator(value: string) {
      value = "" + value;
      notImplemented("public flash.globalization.NumberFormatter::set decimalSeparator"); return;
      // this._decimalSeparator = value;
    }
    get groupingSeparator(): string {
      notImplemented("public flash.globalization.NumberFormatter::get groupingSeparator"); return;
      // return this._groupingSeparator;
    }
    set groupingSeparator(value: string) {
      value = "" + value;
      notImplemented("public flash.globalization.NumberFormatter::set groupingSeparator"); return;
      // this._groupingSeparator = value;
    }
    get negativeSymbol(): string {
      notImplemented("public flash.globalization.NumberFormatter::get negativeSymbol"); return;
      // return this._negativeSymbol;
    }
    set negativeSymbol(value: string) {
      value = "" + value;
      notImplemented("public flash.globalization.NumberFormatter::set negativeSymbol"); return;
      // this._negativeSymbol = value;
    }
    get negativeNumberFormat(): number /*uint*/ {
      notImplemented("public flash.globalization.NumberFormatter::get negativeNumberFormat"); return;
      // return this._negativeNumberFormat;
    }
    set negativeNumberFormat(value: number /*uint*/) {
      value = value >>> 0;
      notImplemented("public flash.globalization.NumberFormatter::set negativeNumberFormat"); return;
      // this._negativeNumberFormat = value;
    }
    get leadingZero(): boolean {
      notImplemented("public flash.globalization.NumberFormatter::get leadingZero"); return;
      // return this._leadingZero;
    }
    set leadingZero(value: boolean) {
      value = !!value;
      notImplemented("public flash.globalization.NumberFormatter::set leadingZero"); return;
      // this._leadingZero = value;
    }
    get trailingZeros(): boolean {
      notImplemented("public flash.globalization.NumberFormatter::get trailingZeros"); return;
      // return this._trailingZeros;
    }
    set trailingZeros(value: boolean) {
      value = !!value;
      notImplemented("public flash.globalization.NumberFormatter::set trailingZeros"); return;
      // this._trailingZeros = value;
    }
    parse(parseString: string): flash.globalization.NumberParseResult {
      parseString = "" + parseString;
      notImplemented("public flash.globalization.NumberFormatter::parse"); return;
    }
    parseNumber(parseString: string): number {
      parseString = "" + parseString;
      notImplemented("public flash.globalization.NumberFormatter::parseNumber"); return;
    }
    formatInt(value: number /*int*/): string {
      value = value | 0;
      notImplemented("public flash.globalization.NumberFormatter::formatInt"); return;
    }
    formatUint(value: number /*uint*/): string {
      value = value >>> 0;
      notImplemented("public flash.globalization.NumberFormatter::formatUint"); return;
    }
    formatNumber(value: number): string {
      value = +value;
      notImplemented("public flash.globalization.NumberFormatter::formatNumber"); return;
    }
    ctor(requestedLocaleIDName: string): void {
      requestedLocaleIDName = "" + requestedLocaleIDName;
      notImplemented("public flash.globalization.NumberFormatter::ctor"); return;
    }
  }
}
