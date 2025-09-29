import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kmvs")
export default class KmvController {
  @operation({
    summary: "Get Kmvs",
  })
  @get()
  static getKmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kmv",
  })
  @post("{id}")
  static createKmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
