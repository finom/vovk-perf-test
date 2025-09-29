import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("leus")
export default class LeuController {
  @operation({
    summary: "Get Leus",
  })
  @get()
  static getLeus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Leu",
  })
  @post("{id}")
  static createLeu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
