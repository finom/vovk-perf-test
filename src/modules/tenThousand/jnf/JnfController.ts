import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnfs")
export default class JnfController {
  @operation({
    summary: "Get Jnfs",
  })
  @get()
  static getJnfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jnf",
  })
  @post("{id}")
  static createJnf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
