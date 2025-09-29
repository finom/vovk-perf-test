import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtcs")
export default class DtcController {
  @operation({
    summary: "Get Dtcs",
  })
  @get()
  static getDtcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtc",
  })
  @post("{id}")
  static createDtc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
