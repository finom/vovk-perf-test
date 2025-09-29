import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qjs")
export default class QjController {
  @operation({
    summary: "Get Qjs",
  })
  @get()
  static getQjs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qj",
  })
  @post("{id}")
  static createQj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
