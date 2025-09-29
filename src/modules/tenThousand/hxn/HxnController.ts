import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxns")
export default class HxnController {
  @operation({
    summary: "Get Hxns",
  })
  @get()
  static getHxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxn",
  })
  @post("{id}")
  static createHxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
