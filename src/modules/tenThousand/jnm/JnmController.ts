import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnms")
export default class JnmController {
  @operation({
    summary: "Get Jnms",
  })
  @get()
  static getJnms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnm",
  })
  @post("{id}")
  static createJnm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
