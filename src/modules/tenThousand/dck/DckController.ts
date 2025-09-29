import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dcks")
export default class DckController {
  @operation({
    summary: "Get Dcks",
  })
  @get()
  static getDcks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dck",
  })
  @post("{id}")
  static createDck = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
