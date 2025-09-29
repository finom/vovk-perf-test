import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cis")
export default class CiController {
  @operation({
    summary: "Get Cis",
  })
  @get()
  static getCis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ci",
  })
  @post("{id}")
  static createCi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
