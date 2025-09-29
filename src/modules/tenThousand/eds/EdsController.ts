import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("eds")
export default class EdsController {
  @operation({
    summary: "Get Eds",
  })
  @get()
  static getEds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Eds",
  })
  @post("{id}")
  static createEds = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
