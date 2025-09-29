import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eeas")
export default class EeaController {
  @operation({
    summary: "Get Eeas",
  })
  @get()
  static getEeas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eea",
  })
  @post("{id}")
  static createEea = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
