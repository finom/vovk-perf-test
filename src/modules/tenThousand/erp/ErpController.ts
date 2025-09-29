import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("erps")
export default class ErpController {
  @operation({
    summary: "Get Erps",
  })
  @get()
  static getErps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Erp",
  })
  @post("{id}")
  static createErp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
