import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwis")
export default class DwiController {
  @operation({
    summary: "Get Dwis",
  })
  @get()
  static getDwis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwi",
  })
  @post("{id}")
  static createDwi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
