import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("drcs")
export default class DrcController {
  @operation({
    summary: "Get Drcs",
  })
  @get()
  static getDrcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Drc",
  })
  @post("{id}")
  static createDrc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
