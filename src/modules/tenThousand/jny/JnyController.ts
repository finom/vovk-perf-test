import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jnies")
export default class JnyController {
  @operation({
    summary: "Get Jnies",
  })
  @get()
  static getJnies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jny",
  })
  @post("{id}")
  static createJny = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
