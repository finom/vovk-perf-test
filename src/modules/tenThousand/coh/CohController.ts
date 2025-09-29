import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cohs")
export default class CohController {
  @operation({
    summary: "Get Cohs",
  })
  @get()
  static getCohs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Coh",
  })
  @post("{id}")
  static createCoh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
