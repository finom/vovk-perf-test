import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzus")
export default class FzuController {
  @operation({
    summary: "Get Fzus",
  })
  @get()
  static getFzus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzu",
  })
  @post("{id}")
  static createFzu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
