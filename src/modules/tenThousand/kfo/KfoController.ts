import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kfos")
export default class KfoController {
  @operation({
    summary: "Get Kfos",
  })
  @get()
  static getKfos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kfo",
  })
  @post("{id}")
  static createKfo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
