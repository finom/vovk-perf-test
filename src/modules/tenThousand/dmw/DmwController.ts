import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dmws")
export default class DmwController {
  @operation({
    summary: "Get Dmws",
  })
  @get()
  static getDmws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dmw",
  })
  @post("{id}")
  static createDmw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
