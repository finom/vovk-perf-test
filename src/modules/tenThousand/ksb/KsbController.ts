import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("ksbs")
export default class KsbController {
  @operation({
    summary: "Get Ksbs",
  })
  @get()
  static getKsbs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Ksb",
  })
  @post("{id}")
  static createKsb = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
