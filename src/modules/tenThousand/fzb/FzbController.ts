import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzbs")
export default class FzbController {
  @operation({
    summary: "Get Fzbs",
  })
  @get()
  static getFzbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzb",
  })
  @post("{id}")
  static createFzb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
