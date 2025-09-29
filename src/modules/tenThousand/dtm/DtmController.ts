import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtms")
export default class DtmController {
  @operation({
    summary: "Get Dtms",
  })
  @get()
  static getDtms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtm",
  })
  @post("{id}")
  static createDtm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
