import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ddrs")
export default class DdrController {
  @operation({
    summary: "Get Ddrs",
  })
  @get()
  static getDdrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ddr",
  })
  @post("{id}")
  static createDdr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
