import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akhs")
export default class AkhController {
  @operation({
    summary: "Get Akhs",
  })
  @get()
  static getAkhs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akh",
  })
  @post("{id}")
  static createAkh = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
