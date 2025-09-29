import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eoes")
export default class EoeController {
  @operation({
    summary: "Get Eoes",
  })
  @get()
  static getEoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eoe",
  })
  @post("{id}")
  static createEoe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
