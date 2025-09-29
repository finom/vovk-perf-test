import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gens")
export default class GenController {
  @operation({
    summary: "Get Gens",
  })
  @get()
  static getGens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gen",
  })
  @post("{id}")
  static createGen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
