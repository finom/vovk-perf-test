import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cdgs")
export default class CdgController {
  @operation({
    summary: "Get Cdgs",
  })
  @get()
  static getCdgs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cdg",
  })
  @post("{id}")
  static createCdg = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
