import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("pus")
export default class PuController {
  @operation({
    summary: "Get Pus",
  })
  @get()
  static getPus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Pu",
  })
  @post("{id}")
  static createPu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
