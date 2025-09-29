import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("auhs")
export default class AuhController {
  @operation({
    summary: "Get Auhs",
  })
  @get()
  static getAuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Auh",
  })
  @post("{id}")
  static createAuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
