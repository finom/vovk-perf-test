import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lcls")
export default class LclController {
  @operation({
    summary: "Get Lcls",
  })
  @get()
  static getLcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lcl",
  })
  @post("{id}")
  static createLcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
