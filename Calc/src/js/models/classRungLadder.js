"use strict";

import DefaultLadderClass from "./classDefaultLadderStair.js";
import * as compData from "../data/complianceData.js";

export default class RungLadder extends DefaultLadderClass {
  constructor(vHeight, width, pitch, activeTab) {
    super(vHeight, width, pitch, activeTab);
  }

  // Calculate rung quantity
  _calcRungQty() {
    return Math.ceil(this.ladderBaseLength / compData.complianceDataRung.maxRungSpc);
  }

  // Calculate rung spacing
  _calcRungSpc() {
    return Math.round(this.ladderBaseLength / this.rungQty);
  }

  // Return top stile length
  _calcTopStile() {
    return this.ladderPitch !== 90 ? 1065 : 1350;
  }

  // Calculate total stile length
  _calcTotalStileLength() {
    return this.ladderBaseLength + this.topStileLength;
  }

  // Calculate stile material usage
  _calcTotalMaterialStile() {
    return this.totalStileLength * 2;
  }

  // Calculate rung material usage
  _calcTotalMaterialThread() {
    return this.rungQty * this.rungSpace;
  }

  _fillData() {
    this.ladderBaseLength = this._calcLadderBase(this);
    this.rungQty = this._calcRungQty(this);
    this.rungSpace = this._calcRungSpc(this);
    this.topStileLength = this._calcTopStile(this);
    this.totalStileLength = this._calcTotalStileLength(this);
    this.totalMaterialStile = this._calcTotalMaterialStile(this);
    this.totalMaterialTread = this._calcTotalMaterialThread(this);
  }
}