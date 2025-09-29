import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("qxes")
export default class QxController {
  @operation({
    summary: "Get Qxes",
  })
  @get()
  static getQxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Qx",
  })
  @post("{id}")
  static createQx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
