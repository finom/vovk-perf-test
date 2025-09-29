import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzjs")
export default class FzjController {
  @operation({
    summary: "Get Fzjs",
  })
  @get()
  static getFzjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzj",
  })
  @post("{id}")
  static createFzj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
