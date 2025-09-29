import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzws")
export default class FzwController {
  @operation({
    summary: "Get Fzws",
  })
  @get()
  static getFzws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzw",
  })
  @post("{id}")
  static createFzw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
