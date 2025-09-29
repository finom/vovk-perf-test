import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfhs")
export default class HfhController {
  @operation({
    summary: "Get Hfhs",
  })
  @get()
  static getHfhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfh",
  })
  @post("{id}")
  static createHfh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
