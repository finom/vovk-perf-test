import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfms")
export default class HfmController {
  @operation({
    summary: "Get Hfms",
  })
  @get()
  static getHfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfm",
  })
  @post("{id}")
  static createHfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
