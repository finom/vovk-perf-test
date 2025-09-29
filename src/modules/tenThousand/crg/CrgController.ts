import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crgs")
export default class CrgController {
  @operation({
    summary: "Get Crgs",
  })
  @get()
  static getCrgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crg",
  })
  @post("{id}")
  static createCrg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
