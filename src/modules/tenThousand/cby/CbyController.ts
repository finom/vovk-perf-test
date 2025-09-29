import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cbies")
export default class CbyController {
  @operation({
    summary: "Get Cbies",
  })
  @get()
  static getCbies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cby",
  })
  @post("{id}")
  static createCby = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
