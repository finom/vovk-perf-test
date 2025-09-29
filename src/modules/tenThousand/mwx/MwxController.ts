import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mwxes")
export default class MwxController {
  @operation({
    summary: "Get Mwxes",
  })
  @get()
  static getMwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mwx",
  })
  @post("{id}")
  static createMwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
