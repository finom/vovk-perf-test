import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cxvs")
export default class CxvController {
  @operation({
    summary: "Get Cxvs",
  })
  @get()
  static getCxvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cxv",
  })
  @post("{id}")
  static createCxv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
