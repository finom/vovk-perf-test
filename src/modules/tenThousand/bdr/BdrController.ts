import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bdrs")
export default class BdrController {
  @operation({
    summary: "Get Bdrs",
  })
  @get()
  static getBdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bdr",
  })
  @post("{id}")
  static createBdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
