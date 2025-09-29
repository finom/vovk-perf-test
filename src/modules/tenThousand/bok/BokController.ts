import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("boks")
export default class BokController {
  @operation({
    summary: "Get Boks",
  })
  @get()
  static getBoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Bok",
  })
  @post("{id}")
  static createBok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
