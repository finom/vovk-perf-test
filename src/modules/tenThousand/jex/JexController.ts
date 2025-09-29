import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("jexes")
export default class JexController {
  @operation({
    summary: "Get Jexes",
  })
  @get()
  static getJexes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Jex",
  })
  @post("{id}")
  static createJex = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
