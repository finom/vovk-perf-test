import { procedure, prefix, get, post, operation } from "vovk";

@prefix("drv")
export default class DrvController {
  @operation({
    summary: "Get Drv",
  })
  @get()
  static getDrv = procedure({
    handle: (_req, params: unknown) => {
      if (params && typeof params === "object" && "id" in params)
        throw new Error("Unexpected id param");
      return null;
    },
  });

  @operation({
    summary: "Create Drv",
  })
  @post("{id}")
  static createDrv = procedure({
    handle: (_req, params: unknown) => {
      if (!(params && typeof params === "object" && "id" in params))
        throw new Error("Missing id param");
      return null;
    },
  });
}
