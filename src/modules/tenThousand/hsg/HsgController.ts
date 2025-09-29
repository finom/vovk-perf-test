import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hsgs")
export default class HsgController {
  @operation({
    summary: "Get Hsgs",
  })
  @get()
  static getHsgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hsg",
  })
  @post("{id}")
  static createHsg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
