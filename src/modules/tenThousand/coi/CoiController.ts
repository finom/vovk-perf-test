import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cois")
export default class CoiController {
  @operation({
    summary: "Get Cois",
  })
  @get()
  static getCois = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coi",
  })
  @post("{id}")
  static createCoi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
