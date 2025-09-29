import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leps")
export default class LepController {
  @operation({
    summary: "Get Leps",
  })
  @get()
  static getLeps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lep",
  })
  @post("{id}")
  static createLep = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
