import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("sbs")
export default class SbController {
  @operation({
    summary: "Get Sbs",
  })
  @get()
  static getSbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Sb",
  })
  @post("{id}")
  static createSb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
