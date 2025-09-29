import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akws")
export default class AkwController {
  @operation({
    summary: "Get Akws",
  })
  @get()
  static getAkws = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akw",
  })
  @post("{id}")
  static createAkw = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
