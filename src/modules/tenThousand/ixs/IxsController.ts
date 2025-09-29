import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ixs")
export default class IxsController {
  @operation({
    summary: "Get Ixs",
  })
  @get()
  static getIxs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ixs",
  })
  @post("{id}")
  static createIxs = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
