import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("nkus")
export default class NkuController {
  @operation({
    summary: "Get Nkus",
  })
  @get()
  static getNkus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Nku",
  })
  @post("{id}")
  static createNku = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
