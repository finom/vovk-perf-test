import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bprs")
export default class BprController {
  @operation({
    summary: "Get Bprs",
  })
  @get()
  static getBprs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpr",
  })
  @post("{id}")
  static createBpr = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
