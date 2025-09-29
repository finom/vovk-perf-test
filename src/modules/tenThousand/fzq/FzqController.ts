import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzqs")
export default class FzqController {
  @operation({
    summary: "Get Fzqs",
  })
  @get()
  static getFzqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzq",
  })
  @post("{id}")
  static createFzq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
