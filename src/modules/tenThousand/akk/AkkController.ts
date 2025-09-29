import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akks")
export default class AkkController {
  @operation({
    summary: "Get Akks",
  })
  @get()
  static getAkks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akk",
  })
  @post("{id}")
  static createAkk = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
