import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcls")
export default class DclController {
  @operation({
    summary: "Get Dcls",
  })
  @get()
  static getDcls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcl",
  })
  @post("{id}")
  static createDcl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
