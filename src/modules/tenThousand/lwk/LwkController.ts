import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lwks")
export default class LwkController {
  @operation({
    summary: "Get Lwks",
  })
  @get()
  static getLwks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lwk",
  })
  @post("{id}")
  static createLwk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
