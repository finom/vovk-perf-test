import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("efms")
export default class EfmController {
  @operation({
    summary: "Get Efms",
  })
  @get()
  static getEfms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Efm",
  })
  @post("{id}")
  static createEfm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
