import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmps")
export default class KmpController {
  @operation({
    summary: "Get Kmps",
  })
  @get()
  static getKmps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmp",
  })
  @post("{id}")
  static createKmp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
