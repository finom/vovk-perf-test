import { prefix, get, post, operation, type KnownAny } from "vovk";

@prefix("kojs")
export default class KojController {
  @operation({
    summary: "Get Kojs",
  })
  @get()
  static getKojs = (_req: unknown, params: KnownAny) => {
    if ("id" in params) throw new Error("Unexpected id param");
    return null;
  };

  @operation({
    summary: "Create Koj",
  })
  @post("{id}")
  static createKoj = (_req: unknown, params: KnownAny) => {
    if (!("id" in params)) throw new Error("Missing id param");
    return null;
  };
}
