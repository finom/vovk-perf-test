import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lizs")
export default class LizController {
  @operation({
    summary: "Get Lizs",
  })
  @get()
  static getLizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Liz",
  })
  @post("{id}")
  static createLiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
