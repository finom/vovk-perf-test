import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ckies")
export default class CkyController {
  @operation({
    summary: "Get Ckies",
  })
  @get()
  static getCkies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cky",
  })
  @post("{id}")
  static createCky = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
