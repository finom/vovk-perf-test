import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcns")
export default class DcnController {
  @operation({
    summary: "Get Dcns",
  })
  @get()
  static getDcns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcn",
  })
  @post("{id}")
  static createDcn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
