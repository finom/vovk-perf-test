import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("xes")
export default class XeController {
  @operation({
    summary: "Get Xes",
  })
  @get()
  static getXes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Xe",
  })
  @post("{id}")
  static createXe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
