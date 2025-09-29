import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mcvs")
export default class McvController {
  @operation({
    summary: "Get Mcvs",
  })
  @get()
  static getMcvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mcv",
  })
  @post("{id}")
  static createMcv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
