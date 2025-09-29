import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eias")
export default class EiaController {
  @operation({
    summary: "Get Eias",
  })
  @get()
  static getEias = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eia",
  })
  @post("{id}")
  static createEia = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
