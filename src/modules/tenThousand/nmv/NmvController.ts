import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nmvs")
export default class NmvController {
  @operation({
    summary: "Get Nmvs",
  })
  @get()
  static getNmvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nmv",
  })
  @post("{id}")
  static createNmv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
