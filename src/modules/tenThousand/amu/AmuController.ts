import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("amus")
export default class AmuController {
  @operation({
    summary: "Get Amus",
  })
  @get()
  static getAmus = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Amu",
  })
  @post("{id}")
  static createAmu = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
