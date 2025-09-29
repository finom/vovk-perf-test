import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtgs")
export default class DtgController {
  @operation({
    summary: "Get Dtgs",
  })
  @get()
  static getDtgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtg",
  })
  @post("{id}")
  static createDtg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
