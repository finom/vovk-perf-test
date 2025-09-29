import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfvs")
export default class HfvController {
  @operation({
    summary: "Get Hfvs",
  })
  @get()
  static getHfvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfv",
  })
  @post("{id}")
  static createHfv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
