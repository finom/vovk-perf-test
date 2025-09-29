import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwos")
export default class JwoController {
  @operation({
    summary: "Get Jwos",
  })
  @get()
  static getJwos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwo",
  })
  @post("{id}")
  static createJwo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
