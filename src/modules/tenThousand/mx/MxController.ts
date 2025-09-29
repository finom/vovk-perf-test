import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxes")
export default class MxController {
  @operation({
    summary: "Get Mxes",
  })
  @get()
  static getMxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mx",
  })
  @post("{id}")
  static createMx = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
