import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfas")
export default class HfaController {
  @operation({
    summary: "Get Hfas",
  })
  @get()
  static getHfas = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfa",
  })
  @post("{id}")
  static createHfa = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
