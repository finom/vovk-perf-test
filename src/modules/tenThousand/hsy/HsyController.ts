import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsies")
export default class HsyController {
  @operation({
    summary: "Get Hsies",
  })
  @get()
  static getHsies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsy",
  })
  @post("{id}")
  static createHsy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
