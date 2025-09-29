import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drvs")
export default class DrvController {
  @operation({
    summary: "Get Drvs",
  })
  @get()
  static getDrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drv",
  })
  @post("{id}")
  static createDrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
