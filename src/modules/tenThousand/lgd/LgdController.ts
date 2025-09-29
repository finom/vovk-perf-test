import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgds")
export default class LgdController {
  @operation({
    summary: "Get Lgds",
  })
  @get()
  static getLgds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgd",
  })
  @post("{id}")
  static createLgd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
