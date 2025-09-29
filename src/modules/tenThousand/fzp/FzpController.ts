import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzps")
export default class FzpController {
  @operation({
    summary: "Get Fzps",
  })
  @get()
  static getFzps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzp",
  })
  @post("{id}")
  static createFzp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
