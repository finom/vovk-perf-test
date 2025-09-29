import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfzs")
export default class HfzController {
  @operation({
    summary: "Get Hfzs",
  })
  @get()
  static getHfzs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfz",
  })
  @post("{id}")
  static createHfz = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
