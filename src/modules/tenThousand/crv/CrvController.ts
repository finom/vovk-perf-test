import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crvs")
export default class CrvController {
  @operation({
    summary: "Get Crvs",
  })
  @get()
  static getCrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crv",
  })
  @post("{id}")
  static createCrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
