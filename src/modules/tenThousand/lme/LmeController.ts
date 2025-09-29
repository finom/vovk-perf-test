import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmes")
export default class LmeController {
  @operation({
    summary: "Get Lmes",
  })
  @get()
  static getLmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lme",
  })
  @post("{id}")
  static createLme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
