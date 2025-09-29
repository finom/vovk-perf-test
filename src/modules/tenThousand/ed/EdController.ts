import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eds")
export default class EdController {
  @operation({
    summary: "Get Eds",
  })
  @get()
  static getEds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ed",
  })
  @post("{id}")
  static createEd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
