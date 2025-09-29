import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnws")
export default class JnwController {
  @operation({
    summary: "Get Jnws",
  })
  @get()
  static getJnws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnw",
  })
  @post("{id}")
  static createJnw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
