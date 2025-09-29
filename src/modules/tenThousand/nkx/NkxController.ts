import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkxes")
export default class NkxController {
  @operation({
    summary: "Get Nkxes",
  })
  @get()
  static getNkxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkx",
  })
  @post("{id}")
  static createNkx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
