import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dscs")
export default class DscController {
  @operation({
    summary: "Get Dscs",
  })
  @get()
  static getDscs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dsc",
  })
  @post("{id}")
  static createDsc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
