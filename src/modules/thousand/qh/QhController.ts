import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qhs")
export default class QhController {
  @operation({
    summary: "Get Qhs",
  })
  @get()
  static getQhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qh",
  })
  @post("{id}")
  static createQh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
