import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("atoes")
export default class AtoController {
  @operation({
    summary: "Get Atoes",
  })
  @get()
  static getAtoes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ato",
  })
  @post("{id}")
  static createAto = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
