import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("hdqs")
export default class HdqController {
  @operation({
    summary: "Get Hdqs",
  })
  @get()
  static getHdqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Hdq",
  })
  @post("{id}")
  static createHdq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
