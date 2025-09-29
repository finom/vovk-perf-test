import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gxns")
export default class GxnController {
  @operation({
    summary: "Get Gxns",
  })
  @get()
  static getGxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gxn",
  })
  @post("{id}")
  static createGxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
