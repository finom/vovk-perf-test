import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnps")
export default class JnpController {
  @operation({
    summary: "Get Jnps",
  })
  @get()
  static getJnps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnp",
  })
  @post("{id}")
  static createJnp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
