import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("bahs")
export default class BahController {
  @operation({
    summary: "Get Bahs",
  })
  @get()
  static getBahs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bah",
  })
  @post("{id}")
  static createBah = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
