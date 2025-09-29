import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drws")
export default class DrwController {
  @operation({
    summary: "Get Drws",
  })
  @get()
  static getDrws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drw",
  })
  @post("{id}")
  static createDrw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
