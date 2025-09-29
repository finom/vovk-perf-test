import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("esies")
export default class EsyController {
  @operation({
    summary: "Get Esies",
  })
  @get()
  static getEsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Esy",
  })
  @post("{id}")
  static createEsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
