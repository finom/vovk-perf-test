import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("guus")
export default class GuuController {
  @operation({
    summary: "Get Guus",
  })
  @get()
  static getGuus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Guu",
  })
  @post("{id}")
  static createGuu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
