import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnos")
export default class JnoController {
  @operation({
    summary: "Get Jnos",
  })
  @get()
  static getJnos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jno",
  })
  @post("{id}")
  static createJno = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
