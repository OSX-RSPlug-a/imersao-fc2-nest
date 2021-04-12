"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RoutesService = void 0;
var common_1 = require("@nestjs/common");
var RoutesService = /** @class */ (function () {
    function RoutesService() {
    }
    RoutesService.prototype.create = function (createRouteDto) {
        return 'This action adds a new route';
    };
    RoutesService.prototype.findAll = function () {
        return "This action returns all routes";
    };
    RoutesService.prototype.findOne = function (id) {
        return "This action returns a #" + id + " route";
    };
    RoutesService.prototype.update = function (id, updateRouteDto) {
        return "This action updates a #" + id + " route";
    };
    RoutesService.prototype.remove = function (id) {
        return "This action removes a #" + id + " route";
    };
    RoutesService = __decorate([
        common_1.Injectable()
    ], RoutesService);
    return RoutesService;
}());
exports.RoutesService = RoutesService;
