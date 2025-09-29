import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzhs")
export default class FzhController {
  @operation({
    summary: "Get Fzhs",
  })
  @get()
  static getFzhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzh",
  })
  @post("{id}")
  static createFzh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
