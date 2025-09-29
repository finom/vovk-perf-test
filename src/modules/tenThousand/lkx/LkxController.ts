import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lkxes")
export default class LkxController {
  @operation({
    summary: "Get Lkxes",
  })
  @get()
  static getLkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lkx",
  })
  @post("{id}")
  static createLkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
