import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ewgs")
export default class EwgController {
  @operation({
    summary: "Get Ewgs",
  })
  @get()
  static getEwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ewg",
  })
  @post("{id}")
  static createEwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
