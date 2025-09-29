import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jxns")
export default class JxnController {
  @operation({
    summary: "Get Jxns",
  })
  @get()
  static getJxns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jxn",
  })
  @post("{id}")
  static createJxn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
