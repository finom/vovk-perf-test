import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnvs")
export default class JnvController {
  @operation({
    summary: "Get Jnvs",
  })
  @get()
  static getJnvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnv",
  })
  @post("{id}")
  static createJnv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
