import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnrs")
export default class JnrController {
  @operation({
    summary: "Get Jnrs",
  })
  @get()
  static getJnrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnr",
  })
  @post("{id}")
  static createJnr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
