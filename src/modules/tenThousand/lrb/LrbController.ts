import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lrbs")
export default class LrbController {
  @operation({
    summary: "Get Lrbs",
  })
  @get()
  static getLrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lrb",
  })
  @post("{id}")
  static createLrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
