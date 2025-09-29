import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ccs")
export default class CcController {
  @operation({
    summary: "Get Ccs",
  })
  @get()
  static getCcs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cc",
  })
  @post("{id}")
  static createCc = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
