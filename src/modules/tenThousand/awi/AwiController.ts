import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("awis")
export default class AwiController {
  @operation({
    summary: "Get Awis",
  })
  @get()
  static getAwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Awi",
  })
  @post("{id}")
  static createAwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
