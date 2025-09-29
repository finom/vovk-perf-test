import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("wies")
export default class WyController {
  @operation({
    summary: "Get Wies",
  })
  @get()
  static getWies = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Wy",
  })
  @post("{id}")
  static createWy = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
