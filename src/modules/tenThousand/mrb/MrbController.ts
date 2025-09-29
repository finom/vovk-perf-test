import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mrbs")
export default class MrbController {
  @operation({
    summary: "Get Mrbs",
  })
  @get()
  static getMrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mrb",
  })
  @post("{id}")
  static createMrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
