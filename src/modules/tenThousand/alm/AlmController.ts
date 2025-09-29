import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("alms")
export default class AlmController {
  @operation({
    summary: "Get Alms",
  })
  @get()
  static getAlms = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Alm",
  })
  @post("{id}")
  static createAlm = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
