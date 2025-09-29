import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lts")
export default class LtsController {
  @operation({
    summary: "Get Lts",
  })
  @get()
  static getLts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lts",
  })
  @post("{id}")
  static createLts = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
