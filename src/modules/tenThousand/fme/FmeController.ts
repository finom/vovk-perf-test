import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fmes")
export default class FmeController {
  @operation({
    summary: "Get Fmes",
  })
  @get()
  static getFmes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fme",
  })
  @post("{id}")
  static createFme = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
