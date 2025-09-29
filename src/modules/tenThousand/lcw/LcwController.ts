import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcws")
export default class LcwController {
  @operation({
    summary: "Get Lcws",
  })
  @get()
  static getLcws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcw",
  })
  @post("{id}")
  static createLcw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
