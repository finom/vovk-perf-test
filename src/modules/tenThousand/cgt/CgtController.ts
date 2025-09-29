import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("cgts")
export default class CgtController {
  @operation({
    summary: "Get Cgts",
  })
  @get()
  static getCgts = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Cgt",
  })
  @post("{id}")
  static createCgt = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
