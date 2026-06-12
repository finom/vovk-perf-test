import { initSegment } from "vovk";
import AController from "../../../../modules/ten/a/a-controller.ts";
import BController from "../../../../modules/ten/b/b-controller.ts";
import CController from "../../../../modules/ten/c/c-controller.ts";
import DController from "../../../../modules/ten/d/d-controller.ts";
import EController from "../../../../modules/ten/e/e-controller.ts";
import FController from "../../../../modules/ten/f/f-controller.ts";
import GController from "../../../../modules/ten/g/g-controller.ts";
import HController from "../../../../modules/ten/h/h-controller.ts";
import IController from "../../../../modules/ten/i/i-controller.ts";
import JController from "../../../../modules/ten/j/j-controller.ts";

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
