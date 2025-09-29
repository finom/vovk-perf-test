import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxzs")
export default class CxzController {
  @operation({
    summary: "Get Cxzs",
  })
  @get()
  static getCxzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxz",
  })
  @post("{id}")
  static createCxz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
