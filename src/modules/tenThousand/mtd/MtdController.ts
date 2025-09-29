import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("mtds")
export default class MtdController {
  @operation({
    summary: "Get Mtds",
  })
  @get()
  static getMtds = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Mtd",
  })
  @post("{id}")
  static createMtd = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
