import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gdes")
export default class GdeController {
  @operation({
    summary: "Get Gdes",
  })
  @get()
  static getGdes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gde",
  })
  @post("{id}")
  static createGde = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
