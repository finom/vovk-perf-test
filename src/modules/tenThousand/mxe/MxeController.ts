import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mxes")
export default class MxeController {
  @operation({
    summary: "Get Mxes",
  })
  @get()
  static getMxes = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mxe",
  })
  @post("{id}")
  static createMxe = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
