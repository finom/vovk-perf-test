import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efgs")
export default class EfgController {
  @operation({
    summary: "Get Efgs",
  })
  @get()
  static getEfgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efg",
  })
  @post("{id}")
  static createEfg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
