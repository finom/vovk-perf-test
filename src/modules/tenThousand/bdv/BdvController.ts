import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdvs")
export default class BdvController {
  @operation({
    summary: "Get Bdvs",
  })
  @get()
  static getBdvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdv",
  })
  @post("{id}")
  static createBdv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
