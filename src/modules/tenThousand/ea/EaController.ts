import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eas")
export default class EaController {
  @operation({
    summary: "Get Eas",
  })
  @get()
  static getEas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ea",
  })
  @post("{id}")
  static createEa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
