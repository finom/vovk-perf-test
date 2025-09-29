import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnbs")
export default class JnbController {
  @operation({
    summary: "Get Jnbs",
  })
  @get()
  static getJnbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnb",
  })
  @post("{id}")
  static createJnb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
