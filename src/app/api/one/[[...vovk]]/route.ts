import { initSegment } from "vovk";
import AController from "../../../../modules/one/a/AController.ts";

const controllers = {
  ARPC: AController,
};

export type Controllers = typeof controllers;

export const { GET, POST, PATCH, PUT, HEAD, OPTIONS, DELETE } = initSegment({
  segmentName: "one",
  emitSchema: true,
  controllers,
});
