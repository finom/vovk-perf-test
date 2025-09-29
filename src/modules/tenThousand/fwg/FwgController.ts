import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fwgs")
export default class FwgController {
  @operation({
    summary: "Get Fwgs",
  })
  @get()
  static getFwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fwg",
  })
  @post("{id}")
  static createFwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
