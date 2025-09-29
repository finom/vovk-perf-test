import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fus")
export default class FuController {
  @operation({
    summary: "Get Fus",
  })
  @get()
  static getFus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fu",
  })
  @post("{id}")
  static createFu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
