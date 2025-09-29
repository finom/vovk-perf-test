import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("csis")
export default class CsiController {
  @operation({
    summary: "Get Csis",
  })
  @get()
  static getCsis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Csi",
  })
  @post("{id}")
  static createCsi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
