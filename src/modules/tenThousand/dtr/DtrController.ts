import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("dtrs")
export default class DtrController {
  @operation({
    summary: "Get Dtrs",
  })
  @get()
  static getDtrs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Dtr",
  })
  @post("{id}")
  static createDtr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
