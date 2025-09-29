import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dkts")
export default class DktController {
  @operation({
    summary: "Get Dkts",
  })
  @get()
  static getDkts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dkt",
  })
  @post("{id}")
  static createDkt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
