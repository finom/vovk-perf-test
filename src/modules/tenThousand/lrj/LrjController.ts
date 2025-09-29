import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrjs")
export default class LrjController {
  @operation({
    summary: "Get Lrjs",
  })
  @get()
  static getLrjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrj",
  })
  @post("{id}")
  static createLrj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
