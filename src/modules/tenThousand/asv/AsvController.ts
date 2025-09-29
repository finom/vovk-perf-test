import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("asvs")
export default class AsvController {
  @operation({
    summary: "Get Asvs",
  })
  @get()
  static getAsvs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Asv",
  })
  @post("{id}")
  static createAsv = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
