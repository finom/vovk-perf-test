import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gcks")
export default class GckController {
  @operation({
    summary: "Get Gcks",
  })
  @get()
  static getGcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gck",
  })
  @post("{id}")
  static createGck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
