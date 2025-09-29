import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cwxes")
export default class CwxController {
  @operation({
    summary: "Get Cwxes",
  })
  @get()
  static getCwxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cwx",
  })
  @post("{id}")
  static createCwx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
