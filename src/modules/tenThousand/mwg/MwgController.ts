import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwgs")
export default class MwgController {
  @operation({
    summary: "Get Mwgs",
  })
  @get()
  static getMwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwg",
  })
  @post("{id}")
  static createMwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
