import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("fqs")
export default class FqController {
  @operation({
    summary: "Get Fqs",
  })
  @get()
  static getFqs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fq",
  })
  @post("{id}")
  static createFq = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
