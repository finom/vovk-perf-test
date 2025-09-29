import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bpls")
export default class BplController {
  @operation({
    summary: "Get Bpls",
  })
  @get()
  static getBpls = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bpl",
  })
  @post("{id}")
  static createBpl = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
