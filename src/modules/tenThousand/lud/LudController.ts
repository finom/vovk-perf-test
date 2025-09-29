import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("luds")
export default class LudController {
  @operation({
    summary: "Get Luds",
  })
  @get()
  static getLuds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lud",
  })
  @post("{id}")
  static createLud = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
