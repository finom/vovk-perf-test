import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dwhs")
export default class DwhController {
  @operation({
    summary: "Get Dwhs",
  })
  @get()
  static getDwhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dwh",
  })
  @post("{id}")
  static createDwh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
