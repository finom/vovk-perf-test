import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bwxes")
export default class BwxController {
  @operation({
    summary: "Get Bwxes",
  })
  @get()
  static getBwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bwx",
  })
  @post("{id}")
  static createBwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
