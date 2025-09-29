import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crps")
export default class CrpController {
  @operation({
    summary: "Get Crps",
  })
  @get()
  static getCrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crp",
  })
  @post("{id}")
  static createCrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
