import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxgs")
export default class CxgController {
  @operation({
    summary: "Get Cxgs",
  })
  @get()
  static getCxgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxg",
  })
  @post("{id}")
  static createCxg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
