import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lubs")
export default class LubController {
  @operation({
    summary: "Get Lubs",
  })
  @get()
  static getLubs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lub",
  })
  @post("{id}")
  static createLub = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
