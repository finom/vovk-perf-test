import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrvs")
export default class LrvController {
  @operation({
    summary: "Get Lrvs",
  })
  @get()
  static getLrvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrv",
  })
  @post("{id}")
  static createLrv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
