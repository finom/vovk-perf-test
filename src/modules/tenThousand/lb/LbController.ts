import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbs")
export default class LbController {
  @operation({
    summary: "Get Lbs",
  })
  @get()
  static getLbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lb",
  })
  @post("{id}")
  static createLb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
