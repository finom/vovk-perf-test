import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("avis")
export default class AviController {
  @operation({
    summary: "Get Avis",
  })
  @get()
  static getAvis = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Avi",
  })
  @post("{id}")
  static createAvi = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
