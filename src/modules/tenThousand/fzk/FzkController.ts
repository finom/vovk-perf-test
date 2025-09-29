import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzks")
export default class FzkController {
  @operation({
    summary: "Get Fzks",
  })
  @get()
  static getFzks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzk",
  })
  @post("{id}")
  static createFzk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
