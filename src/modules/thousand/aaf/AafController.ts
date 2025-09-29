import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("aafs")
export default class AafController {
  @operation({
    summary: "Get Aafs",
  })
  @get()
  static getAafs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Aaf",
  })
  @post("{id}")
  static createAaf = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
