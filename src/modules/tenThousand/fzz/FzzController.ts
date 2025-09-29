import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzzes")
export default class FzzController {
  @operation({
    summary: "Get Fzzes",
  })
  @get()
  static getFzzes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzz",
  })
  @post("{id}")
  static createFzz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
