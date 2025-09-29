import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drps")
export default class DrpController {
  @operation({
    summary: "Get Drps",
  })
  @get()
  static getDrps = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drp",
  })
  @post("{id}")
  static createDrp = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
