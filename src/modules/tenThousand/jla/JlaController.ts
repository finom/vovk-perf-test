import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jlas")
export default class JlaController {
  @operation({
    summary: "Get Jlas",
  })
  @get()
  static getJlas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jla",
  })
  @post("{id}")
  static createJla = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
