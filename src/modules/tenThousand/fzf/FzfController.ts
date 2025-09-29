import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzfs")
export default class FzfController {
  @operation({
    summary: "Get Fzfs",
  })
  @get()
  static getFzfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzf",
  })
  @post("{id}")
  static createFzf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
