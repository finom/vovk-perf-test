import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkzs")
export default class NkzController {
  @operation({
    summary: "Get Nkzs",
  })
  @get()
  static getNkzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nkz",
  })
  @post("{id}")
  static createNkz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
