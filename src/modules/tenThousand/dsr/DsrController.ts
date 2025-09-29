import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dsrs")
export default class DsrController {
  @operation({
    summary: "Get Dsrs",
  })
  @get()
  static getDsrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsr",
  })
  @post("{id}")
  static createDsr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
