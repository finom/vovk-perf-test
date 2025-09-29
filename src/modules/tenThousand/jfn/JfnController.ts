import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jfns")
export default class JfnController {
  @operation({
    summary: "Get Jfns",
  })
  @get()
  static getJfns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jfn",
  })
  @post("{id}")
  static createJfn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
