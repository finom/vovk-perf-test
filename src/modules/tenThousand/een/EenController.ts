import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eens")
export default class EenController {
  @operation({
    summary: "Get Eens",
  })
  @get()
  static getEens = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Een",
  })
  @post("{id}")
  static createEen = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
