import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lmos")
export default class LmoController {
  @operation({
    summary: "Get Lmos",
  })
  @get()
  static getLmos = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lmo",
  })
  @post("{id}")
  static createLmo = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
