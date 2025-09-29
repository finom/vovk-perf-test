import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcvs")
export default class LcvController {
  @operation({
    summary: "Get Lcvs",
  })
  @get()
  static getLcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcv",
  })
  @post("{id}")
  static createLcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
