import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lbs")
export default class LbsController {
  @operation({
    summary: "Get Lbs",
  })
  @get()
  static getLbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lbs",
  })
  @post("{id}")
  static createLbs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
