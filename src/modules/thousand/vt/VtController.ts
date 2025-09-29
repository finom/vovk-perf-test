import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("vts")
export default class VtController {
  @operation({
    summary: "Get Vts",
  })
  @get()
  static getVts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Vt",
  })
  @post("{id}")
  static createVt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
