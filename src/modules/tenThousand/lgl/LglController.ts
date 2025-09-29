import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lgls")
export default class LglController {
  @operation({
    summary: "Get Lgls",
  })
  @get()
  static getLgls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lgl",
  })
  @post("{id}")
  static createLgl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
