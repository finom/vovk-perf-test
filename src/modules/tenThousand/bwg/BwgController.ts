import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwgs")
export default class BwgController {
  @operation({
    summary: "Get Bwgs",
  })
  @get()
  static getBwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwg",
  })
  @post("{id}")
  static createBwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
