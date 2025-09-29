import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzls")
export default class FzlController {
  @operation({
    summary: "Get Fzls",
  })
  @get()
  static getFzls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzl",
  })
  @post("{id}")
  static createFzl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
