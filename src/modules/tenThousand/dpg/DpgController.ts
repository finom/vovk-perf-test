import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dpgs")
export default class DpgController {
  @operation({
    summary: "Get Dpgs",
  })
  @get()
  static getDpgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dpg",
  })
  @post("{id}")
  static createDpg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
