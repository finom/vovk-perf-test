import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gwgs")
export default class GwgController {
  @operation({
    summary: "Get Gwgs",
  })
  @get()
  static getGwgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gwg",
  })
  @post("{id}")
  static createGwg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
