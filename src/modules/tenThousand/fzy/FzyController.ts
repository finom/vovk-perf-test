import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzies")
export default class FzyController {
  @operation({
    summary: "Get Fzies",
  })
  @get()
  static getFzies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzy",
  })
  @post("{id}")
  static createFzy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
