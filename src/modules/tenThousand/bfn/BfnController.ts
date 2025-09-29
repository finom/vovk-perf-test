import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bfns")
export default class BfnController {
  @operation({
    summary: "Get Bfns",
  })
  @get()
  static getBfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bfn",
  })
  @post("{id}")
  static createBfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
