import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdxes")
export default class BdxController {
  @operation({
    summary: "Get Bdxes",
  })
  @get()
  static getBdxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdx",
  })
  @post("{id}")
  static createBdx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
