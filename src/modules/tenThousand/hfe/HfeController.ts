import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hfes")
export default class HfeController {
  @operation({
    summary: "Get Hfes",
  })
  @get()
  static getHfes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hfe",
  })
  @post("{id}")
  static createHfe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
