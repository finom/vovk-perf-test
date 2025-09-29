import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mnts")
export default class MntController {
  @operation({
    summary: "Get Mnts",
  })
  @get()
  static getMnts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mnt",
  })
  @post("{id}")
  static createMnt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
