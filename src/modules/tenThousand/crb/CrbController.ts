import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("crbs")
export default class CrbController {
  @operation({
    summary: "Get Crbs",
  })
  @get()
  static getCrbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Crb",
  })
  @post("{id}")
  static createCrb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
