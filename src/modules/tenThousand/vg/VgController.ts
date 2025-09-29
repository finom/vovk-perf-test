import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vgs")
export default class VgController {
  @operation({
    summary: "Get Vgs",
  })
  @get()
  static getVgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vg",
  })
  @post("{id}")
  static createVg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
