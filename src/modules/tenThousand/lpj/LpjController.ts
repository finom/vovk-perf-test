import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lpjs")
export default class LpjController {
  @operation({
    summary: "Get Lpjs",
  })
  @get()
  static getLpjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Lpj",
  })
  @post("{id}")
  static createLpj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
