import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("loms")
export default class LomController {
  @operation({
    summary: "Get Loms",
  })
  @get()
  static getLoms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lom",
  })
  @post("{id}")
  static createLom = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
