import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hxas")
export default class HxaController {
  @operation({
    summary: "Get Hxas",
  })
  @get()
  static getHxas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hxa",
  })
  @post("{id}")
  static createHxa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
