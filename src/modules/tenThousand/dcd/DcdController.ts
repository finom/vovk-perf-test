import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcds")
export default class DcdController {
  @operation({
    summary: "Get Dcds",
  })
  @get()
  static getDcds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcd",
  })
  @post("{id}")
  static createDcd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
