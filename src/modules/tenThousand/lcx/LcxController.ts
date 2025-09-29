import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcxes")
export default class LcxController {
  @operation({
    summary: "Get Lcxes",
  })
  @get()
  static getLcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcx",
  })
  @post("{id}")
  static createLcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
