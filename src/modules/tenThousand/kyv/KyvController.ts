import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kyvs")
export default class KyvController {
  @operation({
    summary: "Get Kyvs",
  })
  @get()
  static getKyvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Kyv",
  })
  @post("{id}")
  static createKyv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
