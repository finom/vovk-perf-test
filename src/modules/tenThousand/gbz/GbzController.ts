import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gbzs")
export default class GbzController {
  @operation({
    summary: "Get Gbzs",
  })
  @get()
  static getGbzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gbz",
  })
  @post("{id}")
  static createGbz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
