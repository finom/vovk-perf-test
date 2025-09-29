import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixks")
export default class IxkController {
  @operation({
    summary: "Get Ixks",
  })
  @get()
  static getIxks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixk",
  })
  @post("{id}")
  static createIxk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
