import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("yrs")
export default class YrController {
  @operation({
    summary: "Get Yrs",
  })
  @get()
  static getYrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Yr",
  })
  @post("{id}")
  static createYr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
