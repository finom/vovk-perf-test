import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cizs")
export default class CizController {
  @operation({
    summary: "Get Cizs",
  })
  @get()
  static getCizs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ciz",
  })
  @post("{id}")
  static createCiz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
