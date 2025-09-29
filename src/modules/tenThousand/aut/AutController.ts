import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auts")
export default class AutController {
  @operation({
    summary: "Get Auts",
  })
  @get()
  static getAuts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aut",
  })
  @post("{id}")
  static createAut = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
