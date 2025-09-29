import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("lojs")
export default class LojController {
  @operation({
    summary: "Get Lojs",
  })
  @get()
  static getLojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Loj",
  })
  @post("{id}")
  static createLoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
