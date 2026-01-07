import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drv")
export default class DrvController {
  @operation({
    summary: "Get Drv",
  })
  @get()
  static getDrv = procedure({
    handle: () => {
      return { get: true };
    },
  });

  @operation({
    summary: "Create Drv",
  })
  @post("{id}")
  static createDrv = procedure({
    handle: (_req, params: any) => {
      return { post: true, id: params.id };
    },
  });
}
