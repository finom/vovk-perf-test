import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cims")
export default class CimController {
  @operation({
    summary: "Get Cims",
  })
  @get()
  static getCims = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cim",
  })
  @post("{id}")
  static createCim = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
