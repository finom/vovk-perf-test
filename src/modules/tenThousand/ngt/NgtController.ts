import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ngts")
export default class NgtController {
  @operation({
    summary: "Get Ngts",
  })
  @get()
  static getNgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ngt",
  })
  @post("{id}")
  static createNgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
