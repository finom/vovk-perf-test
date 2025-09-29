import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("gsgs")
export default class GsgController {
  @operation({
    summary: "Get Gsgs",
  })
  @get()
  static getGsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Gsg",
  })
  @post("{id}")
  static createGsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
