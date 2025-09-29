import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtbs")
export default class DtbController {
  @operation({
    summary: "Get Dtbs",
  })
  @get()
  static getDtbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtb",
  })
  @post("{id}")
  static createDtb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
