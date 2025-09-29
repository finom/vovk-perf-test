import { initSegment } from "vovk";
import AController from "../../../../modules/ten/a/AController.ts";
import BController from "../../../../modules/ten/b/BController.ts";
import CController from "../../../../modules/ten/c/CController.ts";
import DController from "../../../../modules/ten/d/DController.ts";
import EController from "../../../../modules/ten/e/EController.ts";
import FController from "../../../../modules/ten/f/FController.ts";
import GController from "../../../../modules/ten/g/GController.ts";
import HController from "../../../../modules/ten/h/HController.ts";
import IController from "../../../../modules/ten/i/IController.ts";
import JController from "../../../../modules/ten/j/JController.ts";

const controllers = {
  ARPC: AController,
  BRPC: BController,
  CRPC: CController,
  DRPC: DController,
  ERPC: EController,
  FRPC: FController,
  GRPC: GController,
  HRPC: HController,
  IRPC: IController,
  JRPC: JController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PATCH, PUT, HEAD, OPTIONS, DELETE } = initSegment({
  segmentName: "ten",
  emitSchema: true,
  controllers,
});
