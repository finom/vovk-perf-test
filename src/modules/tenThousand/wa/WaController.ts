import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("was")
export default class WaController {
  @operation({
    summary: "Get Was",
  })
  @get()
  static getWas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wa",
  })
  @post("{id}")
  static createWa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
