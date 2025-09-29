import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("adgs")
export default class AdgController {
  @operation({
    summary: "Get Adgs",
  })
  @get()
  static getAdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Adg",
  })
  @post("{id}")
  static createAdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
