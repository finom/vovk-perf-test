import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fzds")
export default class FzdController {
  @operation({
    summary: "Get Fzds",
  })
  @get()
  static getFzds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fzd",
  })
  @post("{id}")
  static createFzd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
