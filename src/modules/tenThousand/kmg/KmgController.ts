import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmgs")
export default class KmgController {
  @operation({
    summary: "Get Kmgs",
  })
  @get()
  static getKmgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmg",
  })
  @post("{id}")
  static createKmg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
