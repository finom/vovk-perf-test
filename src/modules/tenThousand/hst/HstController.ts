import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsts")
export default class HstController {
  @operation({
    summary: "Get Hsts",
  })
  @get()
  static getHsts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hst",
  })
  @post("{id}")
  static createHst = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
