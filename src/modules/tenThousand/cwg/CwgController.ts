import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwgs")
export default class CwgController {
  @operation({
    summary: "Get Cwgs",
  })
  @get()
  static getCwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwg",
  })
  @post("{id}")
  static createCwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
