import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("afms")
export default class AfmController {
  @operation({
    summary: "Get Afms",
  })
  @get()
  static getAfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Afm",
  })
  @post("{id}")
  static createAfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
