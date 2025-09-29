import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtds")
export default class DtdController {
  @operation({
    summary: "Get Dtds",
  })
  @get()
  static getDtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtd",
  })
  @post("{id}")
  static createDtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
