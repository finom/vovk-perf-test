import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtts")
export default class DttController {
  @operation({
    summary: "Get Dtts",
  })
  @get()
  static getDtts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtt",
  })
  @post("{id}")
  static createDtt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
