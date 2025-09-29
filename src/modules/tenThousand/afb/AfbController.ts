import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afbs")
export default class AfbController {
  @operation({
    summary: "Get Afbs",
  })
  @get()
  static getAfbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afb",
  })
  @post("{id}")
  static createAfb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
