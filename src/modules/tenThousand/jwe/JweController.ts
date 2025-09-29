import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jwes")
export default class JweController {
  @operation({
    summary: "Get Jwes",
  })
  @get()
  static getJwes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jwe",
  })
  @post("{id}")
  static createJwe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
