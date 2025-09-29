import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfis")
export default class HfiController {
  @operation({
    summary: "Get Hfis",
  })
  @get()
  static getHfis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfi",
  })
  @post("{id}")
  static createHfi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
