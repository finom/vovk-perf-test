import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtfs")
export default class DtfController {
  @operation({
    summary: "Get Dtfs",
  })
  @get()
  static getDtfs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtf",
  })
  @post("{id}")
  static createDtf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
