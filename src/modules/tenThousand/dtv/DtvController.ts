import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtvs")
export default class DtvController {
  @operation({
    summary: "Get Dtvs",
  })
  @get()
  static getDtvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtv",
  })
  @post("{id}")
  static createDtv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
