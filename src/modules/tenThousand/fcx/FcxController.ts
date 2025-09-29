import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fcxes")
export default class FcxController {
  @operation({
    summary: "Get Fcxes",
  })
  @get()
  static getFcxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fcx",
  })
  @post("{id}")
  static createFcx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
