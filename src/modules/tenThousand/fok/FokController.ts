import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("foks")
export default class FokController {
  @operation({
    summary: "Get Foks",
  })
  @get()
  static getFoks = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Fok",
  })
  @post("{id}")
  static createFok = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
