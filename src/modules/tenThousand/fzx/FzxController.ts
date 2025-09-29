import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzxes")
export default class FzxController {
  @operation({
    summary: "Get Fzxes",
  })
  @get()
  static getFzxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzx",
  })
  @post("{id}")
  static createFzx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
