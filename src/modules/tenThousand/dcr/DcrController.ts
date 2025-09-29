import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcrs")
export default class DcrController {
  @operation({
    summary: "Get Dcrs",
  })
  @get()
  static getDcrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dcr",
  })
  @post("{id}")
  static createDcr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
