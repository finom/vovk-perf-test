import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wos")
export default class WoController {
  @operation({
    summary: "Get Wos",
  })
  @get()
  static getWos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wo",
  })
  @post("{id}")
  static createWo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
