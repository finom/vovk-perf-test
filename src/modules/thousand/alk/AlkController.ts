import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alks")
export default class AlkController {
  @operation({
    summary: "Get Alks",
  })
  @get()
  static getAlks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alk",
  })
  @post("{id}")
  static createAlk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
