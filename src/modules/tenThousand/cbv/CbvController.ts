import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbvs")
export default class CbvController {
  @operation({
    summary: "Get Cbvs",
  })
  @get()
  static getCbvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cbv",
  })
  @post("{id}")
  static createCbv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
