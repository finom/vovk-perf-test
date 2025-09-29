import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jncs")
export default class JncController {
  @operation({
    summary: "Get Jncs",
  })
  @get()
  static getJncs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnc",
  })
  @post("{id}")
  static createJnc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
