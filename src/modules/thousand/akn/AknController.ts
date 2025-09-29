import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("akns")
export default class AknController {
  @operation({
    summary: "Get Akns",
  })
  @get()
  static getAkns = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Akn",
  })
  @post("{id}")
  static createAkn = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
