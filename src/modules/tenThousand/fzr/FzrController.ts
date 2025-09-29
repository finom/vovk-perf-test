import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzrs")
export default class FzrController {
  @operation({
    summary: "Get Fzrs",
  })
  @get()
  static getFzrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzr",
  })
  @post("{id}")
  static createFzr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
