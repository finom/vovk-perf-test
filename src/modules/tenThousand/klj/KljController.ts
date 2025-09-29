import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kljs")
export default class KljController {
  @operation({
    summary: "Get Kljs",
  })
  @get()
  static getKljs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Klj",
  })
  @post("{id}")
  static createKlj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
