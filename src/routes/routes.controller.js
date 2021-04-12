"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.RoutesController = void 0;
var common_1 = require("@nestjs/common");
var RoutesController = /** @class */ (function () {
    function RoutesController(routesService) {
        this.routesService = routesService;
    }
    RoutesController.prototype.create = function (createRouteDto) {
        return this.routesService.create(createRouteDto);
    };
    RoutesController.prototype.findAll = function () {
        return this.routesService.findAll();
    };
    RoutesController.prototype.findOne = function (id) {
        return this.routesService.findOne(+id);
    };
    // Partial update
    RoutesController.prototype.update = function (id, updateRouteDto) {
        return this.routesService.update(+id, updateRouteDto);
    };
    RoutesController.prototype.remove = function (id) {
        return this.routesService.remove(+id);
    };
    __decorate([
        common_1.Post(),
        __param(0, common_1.Body())
    ], RoutesController.prototype, "create");
    __decorate([
        common_1.Get()
    ], RoutesController.prototype, "findAll");
    __decorate([
        common_1.Get(':id'),
        __param(0, common_1.Param('id'))
    ], RoutesController.prototype, "findOne");
    __decorate([
        common_1.Patch(':id'),
        __param(0, common_1.Param('id')), __param(1, common_1.Body())
    ], RoutesController.prototype, "update");
    __decorate([
        common_1.Delete(':id'),
        __param(0, common_1.Param('id'))
    ], RoutesController.prototype, "remove");
    RoutesController = __decorate([
        common_1.Controller('routes')
    ], RoutesController);
    return RoutesController;
}());
exports.RoutesController = RoutesController;
