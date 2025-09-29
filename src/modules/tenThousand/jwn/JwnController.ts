import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwns")
export default class JwnController {
  @operation({
    summary: "Get Jwns",
  })
  @get()
  static getJwns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwn",
  })
  @post("{id}")
  static createJwn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
