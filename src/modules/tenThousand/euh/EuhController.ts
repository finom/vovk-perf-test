import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("euhs")
export default class EuhController {
  @operation({
    summary: "Get Euhs",
  })
  @get()
  static getEuhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Euh",
  })
  @post("{id}")
  static createEuh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
